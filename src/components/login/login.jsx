import React, { useState } from 'react';
import styles from './login.module.css';

const Login = () => {
  const [formType, setFormType] = useState('signup');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleFormTypeChange = (type) => {
    setFormType(type);
    // 해당 상태에 맞게 입력 필드 초기화
    if (type === 'reset') {
      setFormData({
        email: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // 여기서 데이터를 서버로 전송하면 됩니다.
  };

  return (
    <div className={`${styles.form} ${styles[formType]}`}>
      <div className={styles['form-header']}>
        <div className={`${styles['show-signup']} ${formType === 'signup' ? styles.active : ''}`} onClick={() => handleFormTypeChange('signup')}>Sign Up</div>
        <div className={`${styles['show-signin']} ${formType === 'signin' ? styles.active : ''}`} onClick={() => handleFormTypeChange('signin')}>Sign In</div>
        {/* Reset Password 버튼 제거 */}
        {/* <div className={`${styles['show-reset']} ${formType === 'reset' ? styles.active : ''}`} onClick={() => handleFormTypeChange('reset')}>Reset Password</div> */}
      </div>
      <div className={styles['form-elements']}>
        <form onSubmit={handleSubmit}>
          {/* Sign Up 상태 */}
          {formType === 'signup' && (
            <div>
              <div className={`${styles['form-element']} ${styles.active}`}>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className={`${styles['form-element']} ${styles.active}`}>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
              </div>
              <div className={`${styles['form-element']} ${styles.active}`}>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} required />
              </div>
            </div>
          )}
          {/* Sign In 상태 */}
          {formType === 'signin' && (
            <div>
              <div className={`${styles['form-element']} ${styles.active}`}>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className={`${styles['form-element']} ${styles.active}`}>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
              </div>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.arrow}></div>
    </div>
  );
};

export default Login;
