# MongoDB
100 days code challenge

1) How to get one and more field from another collection. 

==> aggregate 

      {$match: {...query, Status: "Active"}},
      {
        $lookup: {
          from: "answers",
          localField: "_id",
          foreignField: "QuestionId",
          as: "Answer",
        },
      },
      {$unwind: {path: "$Answer", preserveNullAndEmptyArrays: true}},
      {
        $addFields: {
          "AnswerText": "$Answer.AnswerText",
        },
      },
      {$project: {Answer: 0}},
      {$limit: limitParPage},
      {$skip: skipIndex},
    


2 ) map on array and if condition

==> aggregate 

      {$match: {catname: params.catname}},
      {
        $lookup: {
          from: "readinganswers",
          localField: "_id",
          foreignField: "PassageId",
          as: "Answer",
        },
      },
      {$unwind: {path: "$Answer", preserveNullAndEmptyArrays: true}},
      {
        $addFields: {
          question: {
            $map: {
              input: "$question",
              as: "q",
              in: {
                $cond: {
                  "if": {
                    $eq: ["$$q.subqusid", SubqusId],
                  },
                  "then": {"$mergeObjects":
                    ["$$q",
                      {
                        AnswerText: "$Answer.AnswerText",
                      },
                    ],
                  },
                  "else": "$$q",
                },
              },
            },
          },
        },
      },
      {$project: {Answer: 0}},
