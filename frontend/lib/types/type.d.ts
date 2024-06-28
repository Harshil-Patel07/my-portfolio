interface Point {
    title: string;
    description: string;
    id: number;
    content: {
      heading: string;
      body: string;
    }[];
    lottie?:string;
  }
  
  interface WhyChooseMeData {
    intro: string;
    points: Point[];
    title: string;
  }[]