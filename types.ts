export const hamal: { name: string; slug: string }[] = [
  { name: "פלוגה א'", slug: "910-a" },
  { name: "פלוגה ב'", slug: "910-b" },
  { name: "פלוגה ג'", slug: "910-c" },
  { name: "גדוד", slug: "910" },
];

export const targetGroups:{value:string, title:string}[]=[
  {value:"all", title: "כולם"}
]

export interface role {
  code: string;
  name: string;
  menus: {
    send_message: boolean;
    shavzak: boolean;
    zelem: boolean;
    koach_adam: boolean;
    utilities: boolean;
    missions: boolean;
    yambaz: boolean;
    darkash: boolean;
  };
}

export const roles: role[] = [
  {
    code: "org:unit_dispatcher",
    name: "חמליסט",
    menus: {
      send_message: true,
      shavzak: true,
      zelem: false,
      koach_adam: true,
      utilities: false,
      missions: true,
      yambaz: true,
      darkash: true,
    },
  },
];
