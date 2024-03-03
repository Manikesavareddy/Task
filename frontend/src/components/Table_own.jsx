import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
const Table_own = () => {
  // const data = [
  //   {
  //     sno: 1,
  //     customerName: "John Doe",
  //     age: 30,
  //     phone: "123-456-7890",
  //     location: "New York",
  //     created_at: "2024-02-29T12:30:00",
  //   },
  //   {
  //     sno: 2,
  //     customerName: "Jane Smith",
  //     age: 25,
  //     phone: "987-654-3210",
  //     location: "Los Angeles",
  //     created_at: "2024-02-28T10:45:00",
  //   },
  //   {
  //     sno: 3,
  //     customerName: "Alice Johnson",
  //     age: 35,
  //     phone: "555-123-4567",
  //     location: "Chicago",
  //     created_at: "2024-03-01T08:15:00",
  //   },
  //   {
  //     sno: 4,
  //     customerName: "Robert Brown",
  //     age: 40,
  //     phone: "444-789-1234",
  //     location: "Houston",
  //     created_at: "2024-03-02T14:20:00",
  //   },
  //   {
  //     sno: 5,
  //     customerName: "Emily White",
  //     age: 28,
  //     phone: "333-222-1111",
  //     location: "Miami",
  //     created_at: "2024-03-03T09:30:00",
  //   },
  //   {
  //     sno: 6,
  //     customerName: "Michael Johnson",
  //     age: 45,
  //     phone: "777-888-9999",
  //     location: "Seattle",
  //     created_at: "2024-03-04T11:45:00",
  //   },
  //   {
  //     sno: 7,
  //     customerName: "Samantha Lee",
  //     age: 32,
  //     phone: "666-555-4444",
  //     location: "San Francisco",
  //     created_at: "2024-03-05T16:10:00",
  //   },
  //   {
  //     sno: 8,
  //     customerName: "David Martinez",
  //     age: 38,
  //     phone: "222-333-4444",
  //     location: "Dallas",
  //     created_at: "2024-03-06T13:25:00",
  //   },
  //   {
  //     sno: 9,
  //     customerName: "Emma Wilson",
  //     age: 27,
  //     phone: "999-888-7777",
  //     location: "Boston",
  //     created_at: "2024-03-07T17:40:00",
  //   },
  //   {
  //     sno: 10,
  //     customerName: "Daniel Adams",
  //     age: 33,
  //     phone: "888-777-6666",
  //     location: "Atlanta",
  //     created_at: "2024-03-08T10:55:00",
  //   },
  //   {
  //     sno: 11,
  //     customerName: "Olivia Thomas",
  //     age: 29,
  //     phone: "111-222-3333",
  //     location: "Denver",
  //     created_at: "2024-03-09T14:05:00",
  //   },
  //   {
  //     sno: 12,
  //     customerName: "John Doe",
  //     age: 30,
  //     phone: "123-456-7890",
  //     location: "New York",
  //     created_at: "2024-02-29T12:30:00",
  //   },
  //   {
  //     sno: 13,
  //     customerName: "Jane Smith",
  //     age: 25,
  //     phone: "987-654-3210",
  //     location: "Los Angeles",
  //     created_at: "2024-02-28T10:45:00",
  //   },
  //   {
  //     sno: 14,
  //     customerName: "Alice Johnson",
  //     age: 35,
  //     phone: "555-123-4567",
  //     location: "Chicago",
  //     created_at: "2024-03-01T08:15:00",
  //   },
  //   {
  //     sno: 15,
  //     customerName: "Robert Brown",
  //     age: 40,
  //     phone: "444-789-1234",
  //     location: "Houston",
  //     created_at: "2024-03-02T14:20:00",
  //   },
  //   {
  //     sno: 16,
  //     customerName: "Michael Johnson",
  //     age: 45,
  //     phone: "777-888-9999",
  //     location: "Seattle",
  //     created_at: "2024-03-04T11:45:00",
  //   },
  //   {
  //     sno: 17,
  //     customerName: "Samantha Lee",
  //     age: 32,
  //     phone: "666-555-4444",
  //     location: "San Francisco",
  //     created_at: "2024-03-05T16:10:00",
  //   },
  //   {
  //     sno: 18,
  //     customerName: "David Martinez",
  //     age: 38,
  //     phone: "222-333-4444",
  //     location: "Dallas",
  //     created_at: "2024-03-06T13:25:00",
  //   },
  //   {
  //     sno: 19,
  //     customerName: "Emma Wilson",
  //     age: 27,
  //     phone: "999-888-7777",
  //     location: "Boston",
  //     created_at: "2024-03-07T17:40:00",
  //   },
  //   {
  //     sno: 20,
  //     customerName: "Daniel Adams",
  //     age: 33,
  //     phone: "888-777-6666",
  //     location: "Atlanta",
  //     created_at: "2024-03-08T10:55:00",
  //   },

  //   {
  //     sno: 21,
  //     customerName: "John Doe",
  //     age: 30,
  //     phone: "123-456-7890",
  //     location: "New York",
  //     created_at: "2024-02-29T12:30:00",
  //   },
  //   {
  //     sno: 22,
  //     customerName: "Jane Smith",
  //     age: 25,
  //     phone: "987-654-3210",
  //     location: "Los Angeles",
  //     created_at: "2024-02-28T10:45:00",
  //   },
  //   {
  //     sno: 23,
  //     customerName: "Alice Johnson",
  //     age: 35,
  //     phone: "555-123-4567",
  //     location: "Chicago",
  //     created_at: "2024-03-01T08:15:00",
  //   },
  //   {
  //     sno: 24,
  //     customerName: "Robert Brown",
  //     age: 40,
  //     phone: "444-789-1234",
  //     location: "Houston",
  //     created_at: "2024-03-02T14:20:00",
  //   },
  //   {
  //     sno: 25,
  //     customerName: "Emily White",
  //     age: 28,
  //     phone: "333-222-1111",
  //     location: "Miami",
  //     created_at: "2024-03-03T09:30:00",
  //   },
  //   {
  //     sno: 26,
  //     customerName: "Michael Johnson",
  //     age: 45,
  //     phone: "777-888-9999",
  //     location: "Seattle",
  //     created_at: "2024-03-04T11:45:00",
  //   },
  //   {
  //     sno: 27,
  //     customerName: "Samantha Lee",
  //     age: 32,
  //     phone: "666-555-4444",
  //     location: "San Francisco",
  //     created_at: "2024-03-05T16:10:00",
  //   },
  //   {
  //     sno: 28,
  //     customerName: "David Martinez",
  //     age: 38,
  //     phone: "222-333-4444",
  //     location: "Dallas",
  //     created_at: "2024-03-06T13:25:00",
  //   },
  //   {
  //     sno: 29,
  //     customerName: "Emma Wilson",
  //     age: 27,
  //     phone: "999-888-7777",
  //     location: "Boston",
  //     created_at: "2024-03-07T17:40:00",
  //   },
  //   {
  //     sno: 30,
  //     customerName: "Daniel Adams",
  //     age: 33,
  //     phone: "888-777-6666",
  //     location: "Atlanta",
  //     created_at: "2024-03-08T10:55:00",
  //   },

  //   {
  //     sno: 31,
  //     customerName: "John Doe",
  //     age: 30,
  //     phone: "123-456-7890",
  //     location: "New York",
  //     created_at: "2024-02-29T12:30:00",
  //   },
  //   {
  //     sno: 32,
  //     customerName: "Jane Smith",
  //     age: 25,
  //     phone: "987-654-3210",
  //     location: "Los Angeles",
  //     created_at: "2024-02-28T10:45:00",
  //   },
  //   {
  //     sno: 33,
  //     customerName: "Alice Johnson",
  //     age: 35,
  //     phone: "555-123-4567",
  //     location: "Chicago",
  //     created_at: "2024-03-01T08:15:00",
  //   },
  //   {
  //     sno: 34,
  //     customerName: "Robert Brown",
  //     age: 40,
  //     phone: "444-789-1234",
  //     location: "Houston",
  //     created_at: "2024-03-02T14:20:00",
  //   },
  //   {
  //     sno: 35,
  //     customerName: "Emily White",
  //     age: 28,
  //     phone: "333-222-1111",
  //     location: "Miami",
  //     created_at: "2024-03-03T09:30:00",
  //   },
  //   {
  //     sno: 36,
  //     customerName: "Michael Johnson",
  //     age: 45,
  //     phone: "777-888-9999",
  //     location: "Seattle",
  //     created_at: "2024-03-04T11:45:00",
  //   },
  //   {
  //     sno: 37,
  //     customerName: "Samantha Lee",
  //     age: 32,
  //     phone: "666-555-4444",
  //     location: "San Francisco",
  //     created_at: "2024-03-05T16:10:00",
  //   },
  //   {
  //     sno: 38,
  //     customerName: "David Martinez",
  //     age: 38,
  //     phone: "222-333-4444",
  //     location: "Dallas",
  //     created_at: "2024-03-06T13:25:00",
  //   },
  //   {
  //     sno: 39,
  //     customerName: "Emma Wilson",
  //     age: 27,
  //     phone: "999-888-7777",
  //     location: "Boston",
  //     created_at: "2024-03-07T17:40:00",
  //   },
  //   {
  //     sno: 40,
  //     customerName: "Daniel Adams",
  //     age: 33,
  //     phone: "888-777-6666",
  //     location: "Atlanta",
  //     created_at: "2024-03-08T10:55:00",
  //   },

  //   {
  //     sno: 41,
  //     customerName: "John Doe",
  //     age: 30,
  //     phone: "123-456-7890",
  //     location: "New York",
  //     created_at: "2024-02-29T12:30:00",
  //   },
  //   {
  //     sno: 42,
  //     customerName: "Jane Smith",
  //     age: 25,
  //     phone: "987-654-3210",
  //     location: "Los Angeles",
  //     created_at: "2024-02-28T10:45:00",
  //   },
  //   {
  //     sno: 43,
  //     customerName: "Alice Johnson",
  //     age: 35,
  //     phone: "555-123-4567",
  //     location: "Chicago",
  //     created_at: "2024-03-01T08:15:00",
  //   },
  //   {
  //     sno: 44,
  //     customerName: "Robert Brown",
  //     age: 40,
  //     phone: "444-789-1234",
  //     location: "Houston",
  //     created_at: "2024-03-02T14:20:00",
  //   },
  //   {
  //     sno: 45,
  //     customerName: "Emily White",
  //     age: 28,
  //     phone: "333-222-1111",
  //     location: "Miami",
  //     created_at: "2024-03-03T09:30:00",
  //   },
  //   {
  //     sno: 46,
  //     customerName: "Michael Johnson",
  //     age: 45,
  //     phone: "777-888-9999",
  //     location: "Seattle",
  //     created_at: "2024-03-04T11:45:00",
  //   },
  //   {
  //     sno: 47,
  //     customerName: "Samantha Lee",
  //     age: 32,
  //     phone: "666-555-4444",
  //     location: "San Francisco",
  //     created_at: "2024-03-05T16:10:00",
  //   },
  //   {
  //     sno: 48,
  //     customerName: "David Martinez",
  //     age: 38,
  //     phone: "222-333-4444",
  //     location: "Dallas",
  //     created_at: "2024-03-06T13:25:00",
  //   },
  //   {
  //     sno: 49,
  //     customerName: "Emma Wilson",
  //     age: 27,
  //     phone: "999-888-7777",
  //     location: "Boston",
  //     created_at: "2024-03-07T17:40:00",
  //   },
  //   {
  //     sno: 50,
  //     customerName: "Daniel Adams",
  //     age: 33,
  //     phone: "888-777-6666",
  //     location: "Atlanta",
  //     created_at: "2024-03-08T10:55:00",
  //   },
  // ];
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [cur, setCur] = useState(0);
  const [dsorted, setDsorted] = useState(false);
  const [tsorted, setTsorted] = useState(false);
  const [display, setDisplay] = useState(data);
  const [loading, setLoading] = useState(true);
  const ncur = 20;

  useEffect(() => {
    const temp = async () => {
      const val = await axios.get("http://localhost:3000/api/v1/data");

      setData(val.data.data);
      setDisplay([...val.data.data].splice(0, 20));
    };
    temp();
  }, []);

  useEffect(() => {
    const first = Math.min(ncur * cur, 40);
    const last = Math.min(first + ncur, 50);

    // console.log(cur);
    if (cur != 2) {
      const sortedData = [...data].splice(cur * ncur, 20);
      setDisplay(sortedData);
    } else {
      const sortedData = [...data].splice(cur * ncur, 10);
      setDisplay(sortedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cur]);

  const increase = () => {
    setCur((val) => Math.min(val + 1, 2));
  };
  const decrease = () => {
    setCur((val) => Math.max(val - 1, 0));
  };

  const sortByDate = () => {
    if (!dsorted) {
      const sortedData = [...data].sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
      console.log(sortedData);
      setDisplay(sortedData);
      setDsorted((v) => v ^ 1);
    } else {
      const sortedData = [...data].sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      console.log(sortedData);
      setDisplay(sortedData);
      setDsorted((v) => v ^ 1);
    }
  };

  const sortByTime = () => {
    if (!tsorted) {
      const sortedData = [...data].sort((a, b) => {
        const timeA = new Date(a.created_at).getTime();
        const timeB = new Date(b.created_at).getTime();
        return timeA - timeB;
      });
      setDisplay(sortedData);
      setTsorted((v) => v ^ 1);
    } else {
      const sortedData = [...data].sort((a, b) => {
        const timeA = new Date(a.created_at).getTime();
        const timeB = new Date(b.created_at).getTime();
        return timeB - timeA;
      });
      setDisplay(sortedData);
      setTsorted((v) => v ^ 1);
    }
  };

  const find = () => {
    const matchedObjects = [];

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].customerName.toLowerCase().includes(search.toLowerCase()) ||
        data[i].location.toLowerCase().includes(search.toLowerCase())
      ) {
        matchedObjects.push(data[i]);
      }
    }
    setDisplay(matchedObjects);
  };

  return (
    <>
      <h1 className=" min-w-full mb-5 text-4xl font-bold text-center text-blue-700">
        ------------  Table Displayer   ------------
      </h1>
      <div className=" flex items-center justify-between">
        <div className="relative mb-4 flex  w-[50%] flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-gray-400 p-2 text-black "
            placeholder="Enter name or location"
            aria-label="Search"
            aria-describedby="button-addon3"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="relative z-[2] rounded-r border-2 border-gray-400 text-white px-6 py-2 text-xs bg-blue-700"
            type="button"
            id="button-addon3"
            data-te-ripple-init
            onClick={find}
          >
            Search
          </button>
        </div>

        <div className="">
          <button
            onClick={decrease}
            className="mx-10 border-blue-300 text-white bg-blue-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            prev
          </button>
          <button
            onClick={increase}
            className="mx-10 text-white bg-blue-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-700"
          >
            next
          </button>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-blue-700 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-l-xl">
              SNo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Customer Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Location
            </th>
            <th
              colSpan="2"
              className=" p-5 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-r-xl"
            >
              <p className="text-center">Created At</p>
              <tr className="">
                <th
                  className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
                  onClick={sortByDate}
                  type="button"
                >
                  Date
                </th>
                <th
                  className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
                  onClick={sortByTime}
                  type="button"
                >
                  <p className="px-[400%]">Time</p>
                </th>
              </tr>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {display.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{row.sno}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.customer_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{row.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(row.created_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(row.created_at).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table_own;
