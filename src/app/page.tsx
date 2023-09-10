'use client'

import React from "react";
import useDarkMode from "../utils/useDarkMode";
import Navbar from "../components/navbar";

const Home = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

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
              />
            </label>
          </div>

          <label className="input-group mb-4">
            <span className="w-full">Ngày sinh</span>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Nhấp để chọn
              </option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>

              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>

            </select>
          </label>

          <label className="input-group mb-4">
            <span className="w-full">Tháng sinh</span>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Nhấp để chọn
              </option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </label>

          <div className="form-control mb-4">
            <label className="input-group">
              <span className="w-full">Năm sinh</span>
              <input
                type="text"
                placeholder="1994"
                className="input input-bordered"
              />
            </label>
          </div>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Tra Cứu Ngay</button>
        </div>
      </div>
    </div>
  );
};

export default Home;