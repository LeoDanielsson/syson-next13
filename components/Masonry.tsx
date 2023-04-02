'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import debounce from '../utils/debounce';

export interface Breakpoints {
  default: number;
  [key: number]: number;
}

export interface MasonryProps {
  children: ReactNode[];
  breakpointCols: Breakpoints;
  columnClassName: string;
  className: string;
}

const Masonry = ({
  children,
  breakpointCols,
  columnClassName,
  className,
}: MasonryProps) => {
  const [columnCount, setColumnCount] = useState(breakpointCols.default || 2);

  const reCalculateColumnCount = useCallback(() => {
    const matchedBreakpoints = Object.keys(breakpointCols)
      .map((breakpoint) => Number(breakpoint))
      .filter((breakpoint) => window.innerWidth >= breakpoint);

    const matchedBreakpoint = matchedBreakpoints[matchedBreakpoints.length - 1];
    setColumnCount(breakpointCols[matchedBreakpoint] || breakpointCols.default);
  }, [breakpointCols]);

  useEffect(() => {
    reCalculateColumnCount();
  }, [reCalculateColumnCount]);

  const onResize = debounce(reCalculateColumnCount);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  const getItemsInColumns = () => {
    return children.reduce((accumulator: ReactNode[][], child, index) => {
      const columnIndex = index % columnCount;
      if (accumulator[columnIndex] == null) {
        accumulator[columnIndex] = [];
      }
      accumulator[columnIndex].push(child);
      return accumulator;
    }, []);
  };

  const renderColumns = () => {
    const childrenInColumns = getItemsInColumns();
    const width = `${100 / childrenInColumns.length}%`;

    return childrenInColumns.map((items, i) => {
      return (
        <div key={i} className={columnClassName} style={{ width }}>
          {items}
        </div>
      );
    });
  };
  return <div className={className}>{renderColumns()}</div>;
};

export default Masonry;
