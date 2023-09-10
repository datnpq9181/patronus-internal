"use client";

import React, { useState } from "react";
import useDarkMode from "../utils/useDarkMode";
import Navbar from "../components/navbar";
import getNumerologyFromDOB from "../utils/getNumerologyFromDOB";

const Home = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [fullName, setFullName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [numerologyNumber, setNumerologyNumber] = useState<number | null>(null);

  const calculateNumerology = () => {
    const dob = `${year}-${month}-${day}`;
    const numerology = getNumerologyFromDOB(dob);
    setNumerologyNumber(numerology);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`} data-theme="">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="form-control mb-4">
            <label className="input-group">
              <span className="w-full">Họ &amp; Tên khai sinh</span>
              <input
                type="text"
                placeholder="NGUYEN THI ABC"
                className="input input-bordered"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
          </div>

          <label className="input-group mb-4">
            <span className="w-full">Ngày sinh</span>
            <select
              className="select select-bordered w-full"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option disabled selected>
                Nhấp để chọn
              </option>
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">09</option>

              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>

              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </label>

          <label className="input-group mb-4">
            <span className="w-full">Tháng sinh</span>
            <select
              className="select select-bordered w-full"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option disabled selected>
                Nhấp để chọn
              </option>
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>

          <div className="form-control mb-4">
            <label className="input-group">
              <span className="w-full">Năm sinh</span>
              <input
                type="text"
                placeholder="1994"
                className="input input-bordered"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </label>
          </div>
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={calculateNumerology}
          >
            Tra Cứu Ngay
          </button>
          {numerologyNumber && (
            <p className="mt-4">Số chủ đạo của bạn là: {numerologyNumber}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;