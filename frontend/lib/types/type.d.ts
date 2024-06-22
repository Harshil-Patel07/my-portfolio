interface Point {
    title: string;
    description: string;
    id: number;
    content: {
      heading: string;
      body: string;
    }[];
  }
  
  interface WhyChooseMeData {
    intro: string;
    points: Point[];
    title: string;
  }