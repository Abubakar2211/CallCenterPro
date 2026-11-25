import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

export default function ApexChart({ options, id }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = new ApexCharts(containerRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [options]);

  return <div ref={containerRef} id={id} />;
}
