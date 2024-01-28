import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

 import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';

const series = [
  {
    data: [
      { id: 0, value: 10, label: 'series A' },
      { id: 1, value: 15, label: 'series B' },
      { id: 2, value: 20, label: 'series C' },
      { id: 3, value: 10, label: 'series A' },
      { id: 4, value: 15, label: 'series B' },
      { id: 6, value: 20, label: 'series C' },
    ],
  },
];

 
const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Series A',
};
const seriesB = {
  data: [3, 1, 4, 2, 1],
  label: 'Series B',
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: 'Series C',
};
function HomePage() {
  const [isHidden, setIsHidden] = React.useState(false);

  return (
    <>
    <BarChart
      width={600}
      height={300}
      series={[
        { ...seriesA, stack: 'total' },
        { ...seriesB, stack: 'total' },
        { ...seriesC, stack: 'total' },
      ]}
    />
      <Stack>
        <FormControlLabel
          checked={isHidden}
          control={
            <Checkbox onChange={(event) => setIsHidden(event.target.checked)} />
          }
          label="hide the legend"
          labelPlacement="end"
        />
        <PieChart
          series={series}
          slotProps={{ legend: { hidden: isHidden } }}
          width={400}
          height={200}
        />
      </Stack>
    </>
  );
}
export default HomePage;
