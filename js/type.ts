// Добавить в изученные или сложные
// POST ​/users​/{id}​/words​/{wordId} Create a user word
/* 
params: {
  filter: '{ "$and": [{ "userWord.difficulty": "hard" }] }'
  wordsPerPage: '20'
}
*/



// Получить только сложные:
//https://react-learnwords-rsschool.herokuapp.com/users/62fe172c5ae1690016d9e3d7/aggregatedWords?group=0&page=0&wordsPerPage=20&filter=%7B%22userWord.difficulty%22%3A%22hard%22%7D
// {"userWord.difficulty":"hard"} stringify???

/* const wordItem = {
  "_id": "5e9f5ee35eb9e72bc21af4a0",
  "group": 0,
  "page": 0,
  "word": "alcohol",
  "image": "files/01_0002.jpg",
  "audio": "files/01_0002.mp3",
  "audioMeaning": "files/01_0002_meaning.mp3",
  "audioExample": "files/01_0002_example.mp3",
  "textMeaning": "<i>Alcohol</i> is a type of drink that can make people drunk.",
  "textExample": "A person should not drive a car after he or she has been drinking <b>alcohol</b>.",
  "transcription": "[ǽlkəhɔ̀ːl]",
  "textExampleTranslate": "Человек не должен водить машину после того, как он выпил алкоголь",
  "textMeaningTranslate": "Алкоголь - это тип напитка, который может сделать людей пьяными",
  "wordTranslate": "алкоголь",
  "userWord": {
    "difficulty": "hard"
  }
}, */

type userWords = {
  difficulty?: 'learned' | 'difficult' | 'none';
  opional?: {
    game?: {
      audioCall?: {
        right?: number;
        wrong?: number;
      },
      sprint?: {
        right?: number;
        wrong?: number;
      }
    }
  }
}

type statistic = {
    id?: string;
    learnedWords?: number;
    optional?: {
      wordStatistics?: {
        countNewWords?: {
          [key: string]: number; // "20.08.2022": 66
        },
        countLearnedWords?: {
          [key: string]: number;
        }
    },
    gamesStatistics?: {
      audioCall?: {
        lastChanged?: string;
        countNewWords?: number;
        right?: number;
        wrong?: number;
        longestSeries?: number;
      },
      sprint?: {
        lastChanged?: string;
        countNewWords?: number;
        right?: number;
        wrong?: number;
        longestSeries?: number;
      },
      }
    }
}

/*     "id": "62f50e91b8bba0bf38e1b034",
    "learnedWords": 80,
    "optional": {
        "wordStatistics": {
            "11.08.2022": 37,
            "20.08.2022": 66
        },
        "gameStatistics": {
            "sprint": {
                "lastChanged": "20.08.2022",
                "learnedWords": 17,
                "correctAnswers": 13,
                "wrongAnswers": 4,
                "longestSeries": 6
            },
            "savanna": {
                "lastChanged": "20.08.2022",
                "learnedWords": 19,
                "correctAnswers": 33,
                "wrongAnswers": 9,
                "longestSeries": 28
            },
            "audio": {
                "lastChanged": "20.08.2022",
                "learnedWords": 7,
                "correctAnswers": 6,
                "wrongAnswers": 1,
                "longestSeries": 5
            },
            "own": {
                "lastChanged": "11.08.2022",
                "learnedWords": 0,
                "correctAnswers": 0,
                "wrongAnswers": 0,
                "longestSeries": 0
            }
        }
    }
} */


/* export const getUserWordAgregate = (userId, token, group, page, isHard, isDelete, type) => {
  const url = `${baseUrl}/users/${userId}/aggregatedWords`;

  let filter = `{ "$and": [{ "page": ${page - 1} }, {"group": ${group - 1}}, { "userWord.optional.isDelete": null }] }`;

  if (isHard) {
    filter = '{ "$and": [{ "userWord.difficulty": "hard" }] }';
  }

  if (isDelete) {
    filter = `{ "$and": [{ "userWord.optional.isDelete": true }, { "page": ${page - 1} }, {"group": ${group - 1}}] }`;
  }

  if (type === 'study') {
    filter = `{ "$and": [{ "$or": [{ "userWord.difficulty": "hard" }, { "userWord.optional.game": true }] }, { "userWord.optional.isDelete": null }, {"group": ${group - 1}}] }`;
  }

  if (type === 'hard') {
    filter = `{ "$and": [{ "userWord.difficulty": "hard" }, { "userWord.optional.isDelete": null }, {"group": ${group - 1}}] }`;
  }

  if (type === 'delete') {
    filter = `{ "$and": [{ "userWord.optional.isDelete": true }, {"group": ${group - 1}}] }`;
  }

  return axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    params: {
      filter: filter,
      wordsPerPage: type ? 3600 : COUNT_WORDS_ON_PAGE
    }
  })
    .then((response) => response.data)
    .catch((err) => {
      if (err.response?.status === 401) {
        throw new Error('Необходимо авторизоваться');
      }
      throw err;
    });
}; */