import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import LargeChartCard from '../components/Dashboard/LargeChartCard';
import StatSummaryCards from '../components/Dashboard/StatSummaryCards';

/**
 * The main dashboard page for the "Leads Dashboard" application.
 * This page serves as the entry point and dashboard overview, composing various
 * statistical and chart components within the main application layout.
 *
 * It leverages the MainAppLayout to provide the consistent sidebar and header structure,
 * and arranges the content cards in a vertical flow as specified in the layout requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The main content area's children are rendered in a flex column with spacing.
        Each component here represents a major section of the dashboard.
      */}
      
      {/* Top row of summary cards: Funnel Count and Sources */}
      <StatsCardGrid />

      {/* Main chart for tracking leads over time */}
      <LargeChartCard />

      {/* Bottom row of smaller summary cards: Reasons for Lost Leads and Other Data */}
      <StatSummaryCards />

    </MainAppLayout>
  );
};

export default IndexPage;
