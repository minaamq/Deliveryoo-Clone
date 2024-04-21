export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
    name: "name",
    type: "string",
    title:"Restaurant name",
    validation:(Rule)=>Rule.required(),
    },
    {
    name: "short_description",
    type: "string",
    title:"short description",
    validation:(Rule)=>Rule.max(200),
    },
    {
    name: "image",
    type: "image",
    title:"image of the restaurant",
   
    },
    {
    name: "lat",
    type: "number",
    title:"latitude of the Restaurant",
  
    },
    {
    name: "long",
    type: "number",
    title:"longitude of the restaurant ",
    },
    {
    name: "address",
    type: "string",
    title:"Restaurant address",
    validation: (Rule)=>Rule.required(),
    },
    {
    name: "rating",
    type: "string",
    title:"Enter a Rating from (1-5 Stars) ",
    validation: (Rule) =>
      Rule.required()
    .min(1)
    .max(5)
    .error("Please enter a value between 1 and 5")
    },
    {
    name: "type",
    title:"Category",
    validation: (Rule)=>Rule.required(),
    type:"reference",
    to: [{type:"category"}],
    },
    {
    name: "dishes",
    type: "array",
    title: "Dishes",
    of: [{type:"reference", to :[{type:"dish"}] }],
    },
  
  ],
};


