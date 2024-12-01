'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { NewContactForm } from './new-contact-form';
import { Contact } from '@/lib/types/contacts';
import { MOCK_CONTACTS } from '@/lib/data/mock-contacts';
import { User, Plus, PencilSimple, Trash, Star, Clock } from '@phosphor-icons/react';

interface LocationContactsProps {
  locationId: number;
}

export function LocationContacts({ locationId }: LocationContactsProps) {
  const { toast } = useToast();
  const [contacts, setContacts] = useState<Contact[]>(
    MOCK_CONTACTS.filter(contact => contact.locationIds.includes(locationId))
  );
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [deleteContact, setDeleteContact] = useState<Contact | null>(null);

  const handleContactAdd = (contact: Contact) => {
    const newContact = {
      ...contact,
      locationIds: [locationId],
    };
    setContacts(prev => [...prev, newContact]);
    setIsAddingContact(false);
    toast({
      title: "Contact added",
      description: "The new contact has been added successfully.",
    });
  };

  const handleContactUpdate = (updatedContact: Contact) => {
    setContacts(prev =>
      prev.map(c => (c.id === updatedContact.id ? updatedContact : c))
    );
    setEditingContact(null);
    setIsAddingContact(false);
    toast({
      title: "Contact updated",
      description: "The contact information has been updated successfully.",
    });
  };

  const handleContactRemove = (contactId: string) => {
    setContacts(prev => prev.filter(c => c.id !== contactId));
    setDeleteContact(null);
    toast({
      title: "Contact removed",
      description: "The contact has been removed from this location.",
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Contacts</CardTitle>
        <Button
          size="sm"
          className="gap-2 rounded-full"
          onClick={() => {
            setEditingContact(null);
            setIsAddingContact(true);
          }}
        >
          <Plus className="h-4 w-4" />
          Add Contact
        </Button>
      </CardHeader>
      <CardContent>
        {isAddingContact ? (
          <NewContactForm
            initialData={editingContact}
            onSubmit={editingContact ? handleContactUpdate : handleContactAdd}
            onCancel={() => {
              setIsAddingContact(false);
              setEditingContact(null);
            }}
          />
        ) : (
          <div className="space-y-4">
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <Card key={contact.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{contact.name}</span>
                        {contact.isPrimary && (
                          <span className="inline-flex items-center gap-1 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                            <Star className="h-3 w-3" weight="fill" />
                            Primary
                          </span>
                        )}
                        {contact.isManagerOnDuty && (
                          <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            <Clock className="h-3 w-3" weight="fill" />
                            Manager on Duty
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-neutral-500">{contact.role}</div>
                      <div className="text-sm text-neutral-500">{contact.phone}</div>
                      <div className="text-sm text-neutral-500">{contact.email}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full"
                        onClick={() => {
                          setEditingContact(contact);
                          setIsAddingContact(true);
                        }}
                      >
                        <PencilSimple className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full text-red-500 hover:text-red-600"
                        onClick={() => setDeleteContact(contact)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-8 text-neutral-500">
                No contacts added yet
              </div>
            )}
          </div>
        )}
      </CardContent>

      <AlertDialog open={!!deleteContact} onOpenChange={() => setDeleteContact(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Contact</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove {deleteContact?.name} from this location?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600"
              onClick={() => deleteContact && handleContactRemove(deleteContact.id)}
            >
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}