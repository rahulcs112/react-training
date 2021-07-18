import React from 'react'

const InputBox = (props) =>{

    const { formik, customInputValue } = props;

    const changeHandler = (e)=>{
        customInputValue(e.target.value)
    }

    return(
        <>
        <input
                  id="task"
                  type="text"
                  maxLength="50"
                  className={
                    "form-control" +
                    (formik.touched.task && formik.errors.task
                      ? " is-invalid"
                      : "")
                  }
                  placeholder="New Task"
                  name="task"
                  onChange={(e) => changeHandler(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.task}
                />
                {formik.touched.task && formik.errors.task ? (
                  <div className="invalid-feedback">{formik.errors.task}</div>
                ) : null}
                </>
    );
}

export default InputBox;