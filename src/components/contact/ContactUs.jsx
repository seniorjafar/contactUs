
import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name,
      lastName,
      phone,
      gender,
    };
    setSubmittedData([...submittedData, newData]);
    setName('');
    setLastName('');
    setPhone('');
    setGender('');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
const [showImages, setShowImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFavoritesToggle = () => {
    setShowImages(!showImages);
    setSelectedImage(null);
  };
 

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

 

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white my-6 font-[sans-serif] text-[#011c2b]">
            <div className="text-center px-6">
                <h2 className="text-3xl font-extrabold">Contact Us</h2>
                <p className="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help?</p>
            </div>
            <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-8">
                <div className="p-6 rounded-xl lg:col-span-2">
                    <form  onSubmit={handleSubmit}>
                        <div className="grid sm:grid-cols-2 gap-8">
                             
                            <div className="relative flex items-center">
                                <input type="text" placeholder="First Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required  
                                className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
                                    viewBox="0 0 24 24">
                                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                    <path
                                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                        data-original="#000000"></path>
                                </svg>
                            </div>
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Last Name"
                                aria-label="Lastname" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                                    className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2"
                                    viewBox="0 0 24 24">
                                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                    <path
                                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                        data-original="#000000"></path>
                                </svg>
                            </div>
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Phone" id="phone"  value={phone} onChange={(e) => setPhone(e.target.value)} required
                                    className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none" />
                                <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
                                    <path
                                        d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                                        data-original="#000000"></path>
                                </svg>
                            </div>
                            <div className="relative flex items-center"> 
                                    <select type="email" placeholder="Gender" htmlFor="gender" id="gender"  value={gender} onChange={(e) => setGender(e.target.value)} required className='px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none'>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
            
                                <div>
          
        </div>
                            </div>
<div className='blok'>
      <button
        onClick={handleFavoritesToggle}
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
      >
        Favorites
      </button>
      {showImages && (
        <div className='flex gap-3 w-56'>
          <img
            className={`w-100% ${selectedImage === 'https://i.morioh.com/2023/08/03/1a72cb18.webp' ? 'opacity-100' : 'opacity-50'}`} src='https://i.morioh.com/2023/08/03/1a72cb18.webp' alt='Image 1' onClick={() => handleImageClick('https://i.morioh.com/2023/08/03/1a72cb18.webp')}/>
          <img
            className={`w-100% ${selectedImage === 'https://img.reintech.io/variants/gumzfzvewt36yuf0t2mbpt6ot3rk/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b' ? 'opacity-100' : 'opacity-50'}`} src='https://img.reintech.io/variants/gumzfzvewt36yuf0t2mbpt6ot3rk/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b' alt='Image 2' onClick={() => handleImageClick('https://img.reintech.io/variants/gumzfzvewt36yuf0t2mbpt6ot3rk/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b')} />
          <img
            className={`w-100% ${selectedImage === 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U_uY2kSVr8ZfoIVhMFtuGQ.png' ? 'opacity-100' : 'opacity-50'}`} src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U_uY2kSVr8ZfoIVhMFtuGQ.png' alt='Image 3' onClick={() => handleImageClick('https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U_uY2kSVr8ZfoIVhMFtuGQ.png')} />
        </div>
      )}
      {selectedImage && (
        <div className='grid justify-center text-center w-auto '>
            <img onClick={() => console.log(getSelection)}
          className=' w-100%  m-6 ml-44'
          src={selectedImage}
          alt='Selected Image'
        />
        </div>
      )}
    </div> 
                        </div>
                        <button type="submit" className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold bg-[#011c2b] text-white hover:bg-[#011c2bf3]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
                                <path  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"  data-original="#000000" />
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="bg-[#011c2b] rounded-lg p-6 max-lg:text-center">
                    <div className="relative flex items-center sm:col-span-2">
                                <input type="text" placeholder="Search" aria-label="Search"  value={searchTerm} onChange={handleSearch}
                                    className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"></input>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2"
                                    viewBox="0 0 682.667 682.667">
                                    <defs>
                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                        </clipPath>
                                    </defs>
                                    <g  transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                        <path fill="none" 
                                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                            data-original="#000000"></path>
                                        <path
                                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                            data-original="#000000"></path>
                                    </g>
                                </svg>
                            </div>
                    {submittedData.length > 0 && (
  <table className="table-auto text-white text-center gap-4">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      {submittedData
    .filter(data => {
      const searchRegex = new RegExp(searchTerm, 'i');
      return (
        searchRegex.test(data.name) ||
        searchRegex.test(data.lastName) ||
        searchRegex.test(data.phone) ||
        searchRegex.test(data.gender)
      );
    })
    .map((data, index) => (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.lastName}</td>
        <td>{data.phone}</td>
        <td>{data.gender}</td>
      </tr>
    ))}
    </tbody>
  </table>
)}
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default ContactUs;