import React,{useState} from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import InputBox from './InputBox';
const AddTodoTask = (props) =>{



  const {todoList, setTodoList} = props;
  const [inputValue, setInputValue] = useState("");

  const customInputValue = (intValue) => {
    setInputValue(intValue);
  }



  // const clickHandler = (e) =>{
  //   setTodoList([...todoList, inputValue]);
  //   setInputValue("")
  // }



  const formik = useFormik({
   enableReinitialize: true,
    initialValues: {
      task: inputValue,
    },
    validationSchema: Yup.object({
      task: Yup.string().required("task Required"),
    }),
    onSubmit: (values) => {
      
      setTodoList([...todoList, values.task]);
      setInputValue("")
    
    },
  });

    return(
        <>
       <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>
                  Name<span>*</span>
                </label>
                <InputBox formik={formik} customInputValue={customInputValue} />
              </div>
              <div className="form-group">
                <button
                  id="add"
                  type="submit"
                  className="btn btn-info btn-block"
                >
                  ADD
                </button>
              </div>
            </form>
      
        </>
    )
}

export default AddTodoTask;