import React from 'react';
import {
  PieChart, Pie, Cell
} from 'recharts';

const data = [
  [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 500
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ],
  
  [{"value": 3.9998181628293947},
  {"value": 0.48256167455085586},
  {"value": 1.6487858571160139},
  {"value": 2.4707666176003364},
  {"value": 0.2752285910051677},
  {"value": 1.3110912464883726},
  {"value": 5.7143953868515895}],

  [{"value": 2.1563262584232423},
    {"value": 3.0550166975720563},
    {"value": 1.9609072616782854},
    {"value": 2.9307858926939288},
    {"value": 1.9859913131661373},
    {"value": 0.40221364771152757}]
];

const colors = ['#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949', '#af7aa1', '#ff9da7', '#9c755f', '#bab0ab'];

function PieDemo({ preset = 0 }) {
  return (
    <PieChart width={180} height={180}>
      <Pie data={data[preset]} dataKey="value" cx='50%' cy='50%' innerRadius={60} outerRadius={80}>
        {
          data[preset].map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]}/>
          ))
        }
      </Pie>
    </PieChart>
  )
}

export default PieDemo;
