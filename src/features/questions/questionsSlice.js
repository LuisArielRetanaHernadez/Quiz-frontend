import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  question: '',
  answers: [],
  correct_answers: []
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState,

  reducers: {
    addAnswer: (state, action) => {
      state.answers.push(action.payload.answer)
    },
    addAnswerCorrect: (state, action) => {
      state.correct_answers.push(action.payload.answer)
    },
    addQuestion: (state, action) => {
      state.question = action.payload.question
    }
  }
})

export const {
  addAnswer,
  addAnswerCorrect,
  addQuestion
} = questionsSlice.actions

export default questionsSlice.reducer
