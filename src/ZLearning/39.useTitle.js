import {useEffect} from 'react'

export default function useTitle(props) {
        useEffect(()=>{
            document.title=props+" hits on the button"
        })
}
