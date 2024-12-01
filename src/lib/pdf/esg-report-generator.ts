import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 30,
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333333',
    borderBottom: '1px solid #CCCCCC',
    paddingBottom: 5,
  },
  subsection: {
    marginBottom: 15,
  },
  subsectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: '#444444',
  },
  metric: {
    marginBottom: 10,
  },
  metricTitle: {
    fontSize: 12,
    color: '#666666',
  },
  metricValue: {
    fontSize: 14,
    color: '#333333',
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
});

export interface EnvironmentalReportData {
  companyName: string;
  reportingPeriod: {
    start: Date;
    end: Date;
  };
  environmental: {
    carbonEmissions: number;
    energyUsage: number;
    waterConsumption: number;
    wasteRecycled: number;
    renewableEnergy: number;
    emissionsReduction: number;
    treesPlanted: number;
    wasteReductionRate: number;
  };
}

export function generateEnvironmentalReport(data: EnvironmentalReportData) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Environmental Impact Report</Text>
          <Text style={styles.subtitle}>
            {data.companyName} - {format(data.reportingPeriod.start, 'MMMM yyyy')} to{' '}
            {format(data.reportingPeriod.end, 'MMMM yyyy')}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Carbon & Energy</Text>
          <View style={styles.subsection}>
            <Text style={styles.metricTitle}>Carbon Emissions</Text>
            <Text style={styles.metricValue}>{data.environmental.carbonEmissions} tons CO₂e</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.metricTitle}>Energy Usage</Text>
            <Text style={styles.metricValue}>{data.environmental.energyUsage} kWh</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.metricTitle}>Renewable Energy Usage</Text>
            <Text style={styles.metricValue}>{data.environmental.renewableEnergy}%</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.metricTitle}>Emissions Reduction</Text>
            <Text style={styles.metricValue}>{data.environmental.emissionsReduction}%</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Water & Waste</Text>
          <View style={styles.subsection}>
            <Text style={styles.metricTitle}>Water Consumption</Text>
            <Text style={styles.metricValue}>{data.environmental.waterConsumption} gallons</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.metricTitle}>Waste Recycled</Text>
            <Text style={styles.metricValue}>{data.environmental.wasteRecycled} tons</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.metricTitle}>Waste Reduction Rate</Text>
            <Text style={styles.metricValue}>{data.environmental.wasteReductionRate}%</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conservation Impact</Text>
          <View style={styles.subsection}>
            <Text style={styles.metricTitle}>Trees Planted</Text>
            <Text style={styles.metricValue}>{data.environmental.treesPlanted} trees</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Generated by CheckSammy CS+ Platform</Text>
          <Text>Report Date: {format(new Date(), 'MMMM dd, yyyy')}</Text>
        </View>
      </Page>
    </Document>
  );
}