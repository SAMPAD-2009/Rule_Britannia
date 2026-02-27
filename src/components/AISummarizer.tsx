
"use client";

import React, { useState } from 'react';
import { Search, Sparkles, Loader2, History, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { summarizeHistoricalData } from '@/ai/flows/summarize-historical-data';

export function AISummarizer() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const response = await summarizeHistoricalData({ query });
      setResult(response.summary);
    } catch (error) {
      console.error(error);
      setResult("Forgive me, the archives are currently inaccessible. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} /> AI Powered
          </div>
          <h2 className="text-5xl font-headline font-bold gold-glow">CHRONICLE SUMMARIZER</h2>
          <p className="text-muted-foreground">Ask our generative engine anything about specific historical periods, figures, or events. Instantly extract key insights from the vast library of British history.</p>
        </div>

        <Card className="glass-morphism p-8 border-primary/20 shadow-2xl overflow-hidden relative">
           <div className="space-y-6">
              <div className="relative">
                <Textarea 
                  placeholder="e.g., Explain the significance of the East India Company in the 18th century..."
                  className="min-h-[140px] bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 text-lg p-6 pt-8 resize-none rounded-2xl"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="absolute top-3 left-6 flex items-center gap-2 text-primary/40 text-xs font-bold uppercase tracking-widest">
                  <Search size={14} /> Historical Query
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:bg-primary/10"
                    onClick={() => setQuery('Tell me about the Victorian Industrial Revolution')}
                  >
                    <History size={14} className="mr-2" /> Suggested: Industry
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:bg-primary/10"
                    onClick={() => setQuery('Who were the major naval commanders at Trafalgar?')}
                  >
                    <History size={14} className="mr-2" /> Suggested: Navy
                  </Button>
                </div>
                
                <div className="flex gap-4 w-full sm:w-auto">
                   <Button 
                    variant="outline" 
                    className="border-primary/20 text-muted-foreground hover:bg-primary/5"
                    onClick={() => {setQuery(''); setResult(null);}}
                   >
                    <RotateCcw size={16} />
                   </Button>
                   <Button 
                    onClick={handleSummarize} 
                    disabled={loading || !query}
                    className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-white px-8 h-12 font-bold"
                   >
                    {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2" size={18} />}
                    SUMMARIZE DATA
                   </Button>
                </div>
              </div>

              {result && (
                <div className="animate-in fade-in slide-in-from-top duration-500 pt-8 border-t border-primary/10">
                   <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20 relative">
                     <div className="absolute top-4 right-6 text-primary/30 font-headline font-bold text-6xl select-none">"</div>
                     <p className="text-xl font-body leading-relaxed text-foreground italic relative z-10">
                        {result}
                     </p>
                     <div className="mt-4 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                       <div className="w-8 h-[1px] bg-primary" /> Archives Summarized
                     </div>
                   </div>
                </div>
              )}
           </div>
        </Card>
      </div>
    </section>
  );
}
