'use server';
/**
 * @fileOverview This file implements a Genkit flow for summarizing historical data.
 *
 * - summarizeHistoricalData - A function that handles the historical data summarization process.
 * - HistoricalDataSummaryInput - The input type for the summarizeHistoricalData function.
 * - HistoricalDataSummaryOutput - The return type for the summarizeHistoricalData function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const HistoricalDataSummaryInputSchema = z.object({
  query: z.string().describe('A natural language question about historical periods, events, or figures.'),
  context: z.string().optional().describe('Optional additional context to help the AI generate a more accurate summary.'),
});
export type HistoricalDataSummaryInput = z.infer<typeof HistoricalDataSummaryInputSchema>;

const HistoricalDataSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise, AI-generated summary of the requested historical information.'),
});
export type HistoricalDataSummaryOutput = z.infer<typeof HistoricalDataSummaryOutputSchema>;

export async function summarizeHistoricalData(input: HistoricalDataSummaryInput): Promise<HistoricalDataSummaryOutput> {
  return summarizeHistoricalDataFlow(input);
}

const summarizeHistoricalDataPrompt = ai.definePrompt({
  name: 'summarizeHistoricalDataPrompt',
  input: { schema: HistoricalDataSummaryInputSchema },
  output: { schema: HistoricalDataSummaryOutputSchema },
  prompt: `You are an expert historian tasked with providing concise, AI-generated summaries of historical information.
  The user will provide a natural language query about historical periods, events, or figures.
  Your goal is to extract the key facts and events related to the query and present them in a brief, easy-to-understand summary.
  Keep the summary to a maximum of 3-5 sentences.

  {{#if context}}
  Use the following context to help refine your summary:
  Context: {{{context}}}
  {{/if}}

  Query: {{{query}}}`,
});

const summarizeHistoricalDataFlow = ai.defineFlow(
  {
    name: 'summarizeHistoricalDataFlow',
    inputSchema: HistoricalDataSummaryInputSchema,
    outputSchema: HistoricalDataSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await summarizeHistoricalDataPrompt(input);
    if (!output) {
      throw new Error('Failed to generate historical data summary.');
    }
    return output;
  }
);
