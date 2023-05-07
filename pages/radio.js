import { useForm, Controller } from "react-hook-form"
import react from "react"
import { Container, Input, TextField } from "@mui/material"

export default function Radio() {
    const { register, handleSubmit, formState: { errors }, control } = useForm()
    return (
        <Container>
            <div id="q3">
                <span>現在、プログラミングを学習していますか？</span><br />
                <input {...register("radio1", {
                    required: true,
                })} type="radio" value="1" />
                <label>はい</label>
                <input {...register("radio1", {
                    required: true,
                })} type="radio" value="0" />
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
                })} type="radio" value="1" />
                <label>はい</label>
                <input {...register("radio2", {
                    required: true,
                })} type="radio" value="0" />
                <label>いいえ</label>
                {
                    errors.radio2 &&
                    <span>←このフィールドの回答は必須です。</span>
                }
            </div>
        </Container>
    )
}