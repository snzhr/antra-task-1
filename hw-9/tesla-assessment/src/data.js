export const data = [
    {
      region: "US",
      model: "A",
      sales: 150
    },
    {
      region: "US",
      model: "B",
      sales: 120
    },
    {
      region: "US",
      model: "C",
      sales: 350
    },
    {
      region: "EU",
      model: "A",
      sales: 200
    },
    {
      region: "EU",
      model: "B",
      sales: 100
    },
    {
      region: "EU",
      model: "C",
      sales: 250
    },
    {
      region: "CA",
      model: "A",
      sales: 200
    },
    {
      region: "CA",
      model: "B",
      sales: 100
    },
    {
      region: "CA",
      model: "C",
      sales: 230
    },
    {
      region: "CA",
      model: "D",
      sales: 400
    }
  ]

  export const regionOptions = data.reduce((acc, item) => {
    if (!acc[item.region]) {
      acc[item.region] = item.region;
    }
    return acc;
  }, {});
  
  export const modelOptions = data.reduce((acc, item) => {
    if (!acc[item.model]) {
      acc[item.model] = item.model;
    }
    return acc;
  }, {});