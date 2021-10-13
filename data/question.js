import {Questions} from "../models/Questions.js"
import { data } from "./data.js"
export const preguntas = data.map(question => new Questions(question.question,question.choices,question.answer))