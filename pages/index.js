import { useForm, Controller } from "react-hook-form"
import { useState, useEffect } from "react"
import { Container, Input, TextField } from "@mui/material"
import firebase from "./config/firebase"
import { collection, onSnapshot } from 'firebase/firestore';

export default function Home() {

  const onSubmit = (e) => {
    console.log(e)
    console.log(e.name, e.dateofbirth, e.radio1, e.radio2, e.language)
    // const db = firebase.firestore().collection("questionnaire")
    //   .add({
    //     name: e.name,
    //     dateofbirth: e.dateofbirth,
    //     radio1: e.radio1,
    //     radio2: e.radio2,
    //     language: e.language
    //   })
  }

  const [isPublished, setIsPublished] = useState(false)
  const [open, setOpen] = useState(false)

  const exQ = () => {
    setIsPublished(true)
  }
  const exQcancell = () => {
    setIsPublished(false)
  }
  const exQ2 = () => {
    setOpen(true)
  }
  const exQ2cancell = () => {
    setOpen(false)
  }

  const whatLanguage = () => {
    if (isPublished || open) {
      return (true)
    }
    else { return (false) }
  }

  const { register, handleSubmit, formState: { errors }, control } = useForm()

  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>名前(匿名可)</label>
          <div id="q1">
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />
          </div>
          <div id="q2">
            <label>生年月日 ex:2023, 03/11=20230311</label><br />
            <Controller
              name="dateofbirth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />} />
          </div>
          <div id="q3">
            <span>現在、プログラミングを学習していますか？</span><br />
            <input {...register("radio1", {
              required: true,
            })} type="radio" value="1" onChange={exQ} />
            <label>はい</label>
            <input {...register("radio1", {
              required: true,
            })} type="radio" value="0" onChange={exQcancell} />
            <label>いいえ</label>
            {
              errors.radio1 &&
              <span>←このフィールドの回答は必須です。</span>
            }
          </div>
          <div id="q4">
            <span>これまでに、プログラミングを学習したことがありますか？</span><br />
            <input {...register("radio2", {
              required: true,
            })} type="radio" value="1" onChange={exQ2} />
            <label>はい</label>
            <input {...register("radio2", {
              required: true,
            })} type="radio" value="0" onChange={exQ2cancell} />
            <label>いいえ</label>
            {
              errors.radio2 &&
              <span>←このフィールドの回答は必須です。</span>
            }
          </div>

          <div id="q5" hidden={!open && !isPublished}>
            <span>学習した言語を記入してください</span><br />
            <TextField
              name="language"
              label="学習した言語を記入してください"
              multiline
              rows={5}
              fullWidth
              defaultValue=""
              control={control}
              {...register("language")}
            />
          </div>

          <div id="submit">
            <input type="submit" value="アンケートを提出する" />
          </div>
        </form>
      </Container>
    </>
  )
} 
