import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form className='m-5 w-full' >

      <p className='mb-3 text-lg font-medium' >Add Doctor</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll' >
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="doc-img" hidden/>
          <p>Upload Doctor Picture</p>
        </div>

        <div>
          <div>
            <div>
              <p>Doctor Name</p>
              <input type="text" placeholder='Name' required />
            </div>
            <div>
              <p>Doctor Email</p>
              <input type="email" placeholder='Email' required />
            </div>
            <div>
              <p>Doctor Password</p>
              <input type="password" placeholder='Password' required />
            </div>
            <div>
              <p>Experience</p>
              <select name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Years</option>
                <option value="3 Year">3 Years</option>
                <option value="4 Year">4 Years</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Years</option>
                <option value="7 Year">7 Years</option>
                <option value="8 Year">8 Years</option>
                <option value="9 Year">9 Years</option>
                <option value="10 Year">10 Years</option>
              </select>
            </div>

            <div>
              <p>Fees</p>
              <input type="number" placeholder='fees' required />
            </div>

          </div>
          <div>
            <div>
              <p>Speciality</p>
              <select name="" id="">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div>
              <p>Education</p>
              <input type="text" placeholder='Education' required />
            </div>

            <div>
              <p>Address</p>
              <input type="text" placeholder='Address 1' required />
              <input type="text" placeholder='Address 2' required />
            </div>

          </div>
        </div>

        <div>
          <p>About Doctor</p>
          <textarea placeholder='Write about doctor' rows={5} required />
        </div>

        <button>Add Doctor</button>

      </div>

    </form>
  )
}

export default AddDoctor