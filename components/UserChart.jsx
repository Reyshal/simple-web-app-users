"use client";

import { PieChart } from '@mui/x-charts';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserChart() {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/users?groupBy=gender')
      .then((response) => {
        const data = response.data.groups.map((group, index) => ({
          id: index + 1,
          label: group.value,
          value: group.count
        }));

        setState((prevState) => ({
          ...prevState,
          data,
          loading: false
        }));
      })
  }, [])

  return (
    <PieChart
      series={[
        {
          data: state.data,
        },
      ]}
      loading={state.loading}
      width={200}
      height={200}
    />
  );
}