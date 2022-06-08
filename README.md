# MongoDB
100 days code challenge

1) How to get one and more field from another collection. 

==> aggregate([
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
    ]);
