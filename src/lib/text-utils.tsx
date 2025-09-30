import React from 'react';

// Target phrases to match (case-insensitive, flexible spacing and accents)
const TARGET_PHRASES = [
  /José\s+Gregorio\s+Hernández/gi,
  /José\s+Gregorio/gi,
  /Jose\s+Gregorio\s+Hernandez/gi,
  /Jose\s+Gregorio/gi,
  /El\s+Santo\s+del\s+Diálogo/gi,
  /El\s+Santo\s+del\s+Dialogo/gi,
];

/**
 * Wraps target phrases in wine color spans while preserving other formatting
 */
export const colorizeJoseGregorio = (text: string): React.ReactNode => {
  if (!text || typeof text !== 'string') return text;
  
  let result: React.ReactNode[] = [];
  let lastIndex = 0;
  let keyCounter = 0;
  
  // Find all matches across all patterns
  const allMatches: Array<{ match: string; index: number; length: number }> = [];
  
  TARGET_PHRASES.forEach(pattern => {
    const matches = Array.from(text.matchAll(pattern));
    matches.forEach(match => {
      if (match.index !== undefined) {
        allMatches.push({
          match: match[0],
          index: match.index,
          length: match[0].length
        });
      }
    });
  });
  
  // Sort matches by position to handle overlaps
  allMatches.sort((a, b) => a.index - b.index);
  
  // Remove overlapping matches (keep first occurrence)
  const cleanMatches = [];
  let lastEnd = -1;
  for (const match of allMatches) {
    if (match.index >= lastEnd) {
      cleanMatches.push(match);
      lastEnd = match.index + match.length;
    }
  }
  
  // Build the result with colored spans
  cleanMatches.forEach(({ match, index, length }) => {
    // Add text before the match
    if (index > lastIndex) {
      result.push(text.slice(lastIndex, index));
    }
    
    // Add the colored match
    result.push(
      <span key={`wine-${keyCounter++}`} className="text-wine">
        {match}
      </span>
    );
    
    lastIndex = index + length;
  });
  
  // Add remaining text
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }
  
  // If no matches found, return original text
  return result.length > 0 ? result : text;
};

/**
 * Component wrapper for easy use in JSX
 */
interface ColorizedTextProps {
  children: string;
  className?: string;
}

export const ColorizedText: React.FC<ColorizedTextProps> = ({ children, className }) => {
  const colorizedContent = colorizeJoseGregorio(children);
  
  return (
    <span className={className}>
      {colorizedContent}
    </span>
  );
};