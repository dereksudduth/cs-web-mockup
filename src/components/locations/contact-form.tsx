'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
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
import { User, Plus, PencilSimple, Trash, Star, Clock } from '@phosphor-icons/react';

interface ContactFormProps {
  locationId?: number;
  onContactsChange?: (contacts: Contact[]) => void;
}

export function ContactForm({ locationId, onContactsChange }: ContactFormProps) {
  const { toast } = useToast();
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);
  const [useManagerOnDuty, setUseManagerOnDuty] = useState(false);
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [deleteContact, setDeleteContact] = useState<Contact | null>(null);

  const handleContactAdd = (contact: Contact) => {
    const updatedContacts = [...selectedContacts, contact];
    setSelectedContacts(updatedContacts);
    onContactsChange?.(updatedContacts);
    setIsAddingContact(false);
    toast({
      title: "Contact added",
      description: "The new contact has been added successfully.",
    });
  };

  const handleContactRemove = (contactId: string) => {
    const updatedContacts = selectedContacts.filter(c => c.id !== contactId);
    setSelectedContacts(updatedContacts);
    onContactsChange?.(updatedContacts);
    setDeleteContact(null);
    toast({
      title: "Contact removed",
      description: "The contact has been removed from this location.",
    });
  };

  const handleContactEdit = (contact: Contact) => {
    setEditingContact(contact);
    setIsAddingContact(true);
  };

  const handleContactUpdate = (updatedContact: Contact) => {
    const updatedContacts = selectedContacts.map(c =>
      c.id === updatedContact.id ? updatedContact : c
    );
    setSelectedContacts(updatedContacts);
    onContactsChange?.(updatedContacts);
    setEditingContact(null);
    setIsAddingContact(false);
    toast({
      title: "Contact updated",
      description: "The contact information has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Switch
            checked={useManagerOnDuty}
            onCheckedChange={setUseManagerOnDuty}
          />
          <Label>Use Manager on Duty</Label>
        </div>
        <Button
          variant="outline"
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
      </div>

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
          {selectedContacts.length > 0 ? (
            <div className="space-y-2">
              {selectedContacts.map((contact) => (
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
                        onClick={() => handleContactEdit(contact)}
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
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-neutral-500">
              No contacts added yet
            </div>
          )}
        </div>
      )}

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
    </div>
  );
}