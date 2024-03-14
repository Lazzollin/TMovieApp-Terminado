import React, { useState } from 'react'

const useForm = () => {

    const [formState, setFormState] = useState({})
    const onChangeInput = (field, value) => {
        setFormState({
            ...formState,
            [field]: value,
        })
    }
    return {
        ...formState,
        formState,
        onChangeInput
    }
}

export default useForm