import React from 'react'
import Select from 'react-select'
import { Darker_Grotesque } from "@next/font/google";

const dg = Darker_Grotesque({
    variable: "--darker-grotesque-font",
    subsets: ["latin"],
    weight: "600"
});

const categories = [
    { id: 1, value: 'Agriculture & Forestry', label: 'Agriculture & Forestry', unavailable: false },
    { id: 2, label: 'Business and Information', value: 'Business and Information', unavailable: false },
    { id: 3, label: 'Construction & Utilities', value: 'Business and Information', unavailable: false },
    { id: 4, label: 'Education', value: 'Business and Information', unavailable: true },
    { id: 5, label: 'Finance & Insurance', value: 'Business and Information', unavailable: false },
    { id: 6, label: 'Food & Hospitality', value: 'Business and Information', unavailable: false },
    { id: 7, label: 'Gaming', value: 'Business and Information', unavailable: false },
    { id: 8, label: 'Health Services', value: 'Business and Information', unavailable: false },
    { id: 9, label: 'Natural Resources & Environment', value: 'Business and Information', unavailable: false },
    { id: 10, label: 'Personal Services', value: 'Business and Information', unavailable: false },
    { id: 11, label: 'Real Estate & Housing', value: 'Business and Information', unavailable: false },
    { id: 12, label: 'Security & Legal', value: 'Business and Information', unavailable: false },
    { id: 13, label: 'Transportation', value: 'Business and Information', unavailable: false },
  ]

const Categories2 = () => (
  <Select className={'w-72 '+dg.className} options={categories} />
)

export default Categories2;
