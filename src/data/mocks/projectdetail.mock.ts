export interface Photo {
  id: number;
  url: string;
}

export interface ProjectDetail {
  id: number;
  title: string;
  url: string;
  photos: Photo[];
}

export const PROJECT_DETAIL_MOCK: ProjectDetail[] = [
  {
    id: 1,
    title: "Paisaje montañoso",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    photos: [
      {
        id: 101,
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        id: 102,
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      },
      {
        id: 103,
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      },
    ],
  },
  {
    id: 2,
    title: "Ciudad nocturna",
    url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
    photos: [
      {
        id: 201,
        url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
      },
      {
        id: 202,
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      },
      {
        id: 203,
        url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
      },
            {
        id: 501,
        url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
      },
      {
        id: 502,
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      },
      {
        id: 503,
        url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      },
    ],
  },
  {
    id: 3,
    title: "Bosque nevado",
    url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    photos: [
      {
        id: 301,
        url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      },
      {
        id: 302,
        url: "https://images.unsplash.com/photo-1517821365201-5f3a1c9b4d3c",
      },
      {
        id: 303,
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      },
    ],
  },
  {
    id: 4,
    title: "Playa tropical",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    photos: [
      {
        id: 401,
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
      {
        id: 402,
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 403,
        url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      },
    ],
  },
  {
    id: 5,
    title: "Cielo estrellado",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    photos: [
      {
        id: 501,
        url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
      },
      {
        id: 502,
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      },
      {
        id: 503,
        url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      },
            {
        id: 101,
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        id: 102,
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      },
      {
        id: 103,
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      },
    ],
  },
];
