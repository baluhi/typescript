// sampleData.ts

export interface DataItem {
  id: number | string;
  name: string;
  sub_list?: DataItem[];
}

export const sampleData: DataItem[] = [
  {
    id: "1",
    name: 'Parent Row 1',
    sub_list: [
      {
        id: "1.1",
        name: 'Child Row 1',
        sub_list: [
          {
            id: "1.1.1",
            name: 'Grandchild Row 1',
            sub_list: [
              { id: "1.1.1.1", name: 'Grandchild Row 1.1.1.1',
                sub_list: [
                  { id: "1.1.1.1", name: 'Grandchild Row 1.1.1.1' ,
                    sub_list: [
                      { id: "1.1.1.4", name: 'Grandchild Row 1.1.1.1' },
                      { id: "1.1.1.2", name: 'Grandchild Row 1.1.1.2' },
                    ],
                  },
                  { id: "1.1.1.2", name: 'Grandchild Row 1.1.1.2' },
                ],
               },
              { id: "1.1.1.2", name: 'Grandchild Row 1.1.1.2' },
            ],
          },
          { id: "1.1.2", name: 'Grandchild Row 2' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Parent Row 2',
    sub_list: [{ id: 6, name: 'Child Row 2' }],
  },
  {
    id: 3,
    name: 'Parent Row 3',
    sub_list: [{ id: 8, name: 'Child Row 3' }],
  },
];
