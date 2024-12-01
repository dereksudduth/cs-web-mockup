import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 30,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  content: {
    marginBottom: 30,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333333',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    textAlign: 'center',
    fontSize: 10,
    color: '#666666',
  },
  signature: {
    marginTop: 50,
    borderTop: '1px solid #CCCCCC',
    paddingTop: 20,
    textAlign: 'center',
  },
});

export interface CertificateData {
  id: string;
  type: string;
  credits: number;
  issuedTo: string;
  issuedDate: Date;
  validUntil: Date;
  carbonOffset?: number;
  recyclingImpact?: number;
  waterSaved?: number;
}

export function generateCertificatePDF(data: CertificateData) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Sustainability Certificate</Text>
          <Text style={styles.subtitle}>{data.type}</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certificate Details</Text>
            <Text style={styles.text}>Certificate ID: {data.id}</Text>
            <Text style={styles.text}>Issued To: {data.issuedTo}</Text>
            <Text style={styles.text}>Issue Date: {format(data.issuedDate, 'MMMM dd, yyyy')}</Text>
            <Text style={styles.text}>Valid Until: {format(data.validUntil, 'MMMM dd, yyyy')}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Environmental Impact</Text>
            <Text style={styles.text}>Credits Awarded: {data.credits}</Text>
            {data.carbonOffset && (
              <Text style={styles.text}>Carbon Offset: {data.carbonOffset} tons CO₂e</Text>
            )}
            {data.recyclingImpact && (
              <Text style={styles.text}>Recycling Impact: {data.recyclingImpact} tons</Text>
            )}
            {data.waterSaved && (
              <Text style={styles.text}>Water Saved: {data.waterSaved} gallons</Text>
            )}
          </View>

          <View style={styles.signature}>
            <Text style={styles.text}>Authorized Signature</Text>
            <Text style={styles.text}>CheckSammy Sustainability Officer</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>This certificate is digitally generated and verified by CheckSammy Platform</Text>
          <Text>Verification URL: https://checksammy.com/verify/{data.id}</Text>
        </View>
      </Page>
    </Document>
  );
}