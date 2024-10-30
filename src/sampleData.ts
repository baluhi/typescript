// sampleData.ts

export const HEADERNAME: string = 'Table Row and columns';

export interface Node {
  id: number | string; // Adjusting to handle `3.1`, `3.2` as numbers or strings
  name: string;
  sub_list?: Node[];
}

export const sampleData: Node[] = [
  {
    id: 1,
    name: 'Parent Row 1',
    sub_list: [
      {
        id: 2,
        name: 'Child Row 1',
        sub_list: [
          {
            id: 3,
            name: 'Grandchild Row 1',
            sub_list: [
              { id: 3.1, name: 'Grandchild Row 3.1' },
              { id: 3.2, name: 'Grandchild Row 3.2' },
            ],
          },
          { id: 4, name: 'Grandchild Row 2' },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Parent Row 2',
    sub_list: [{ id: 6, name: 'Child Row 2' }],
  },
  {
    id: 7,
    name: 'Parent Row 3',
    sub_list: [{ id: 8, name: 'Child Row 3' }],
  },
];
