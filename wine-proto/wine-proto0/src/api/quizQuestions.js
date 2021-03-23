var quizQuestions = [
  {
      question: "Would you describe yourself as a savvy spender or a penny pincher?",
      answers: [
          {
              type: "MoreExpensive", // need to pick what this would correspond to 
              content: "I never check the price tag when I shop!"
          },
          {
              type: "TraderJoes",
              content: "I like to save money, but I’m willing to splurge here and there"
          },
          {
              type: "TraderJoes",
              content: "Saving money is a priority to me, I tend to go for the cheapest options when I shop"
          }
      ]
  },
  {
      question: "Do you prefer sweet or salty foods?",
      answers: [
          {
              type: "NotSweet",
              content: "I prefer a bag of chips over a chocolate bar"
          },
          {
              type: "Sweet",
              content: "I prefer a chocolate bar over a bag of chips"
          },
          {
              type: "MixSweet",
              content: "I like a mixture of both"
          }
      ]
  },
  {
      question: "What is your drink of choice?",
      answers: [
          {
              type: "Marg",
              content: "A margarita"
          },
          {
              type: "Vodka",
              content: "Vodka on the rocks"
          },
          {
              type: "Beer",
              content: "Beer"
          }
      ]
  },
  {
      question: "How do you take your coffee?",
      answers: [
          {
              type: "Black",
              content: "Black"
          },
          {
              type: "Light",
              content: "Light cream"
          },
          {
              type: "Light+",
              content: "Light cream & sugar"
          },
          {
            type: "Medium+",
            content: "Medium cream & sugar"
        },
        {
            type: "Heavy+",
            content: "Heavy cream & sugar"
        },
        {
            type: "na",
            content: "I don't drink coffee"
        }
      ]
  },
  {
      question: "What is your favorite candy?",
      answers: [
          {
              type: "Sour",
              content: "Sour Gummy Worms"
          },
          {
              type: "NotSour",
              content: "M&Ms"
          },
          {
              type: "Sour",
              content: "Sour skittles"
          },
          {
            type: "NotSour",
            content: "Starburst"
        }
      ]
  }
];

export default quizQuestions;
