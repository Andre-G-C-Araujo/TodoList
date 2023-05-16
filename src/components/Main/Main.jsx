import './Main.css';
import { useState } from 'react';

export const Main = () => {
  const [list, setLista] = useState([]);
  const [newTask, setNewTaks] = useState('');
  const [done, setDone] = useState([]);

  const addNewTask = () => {
    if (newTask === '') return;
    setLista([...list, newTask]);
    setNewTaks('');
  };

  const btnDelete = (event) => {
    const newList = list.filter((item, index) =>
      index === event ? '' : 'erro',
    );

    setLista(newList);
  };

  const listDone = (item) => {
    setDone([...done, item]);
  };

  return (
    <section style={{ background: '#00e1d9', height: '1000px' }}>
      <h1
        style={{
          color: 'aqua',
          background: '#210070',
          fontSize: '50px',
          width: '250px',
          height: '50px',
          margin: 'auto',
          padding: '0px 10px 0px 10px',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          borderRadius: '100%',
        }}
      >
        To do list
      </h1>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <input
          placeholder="Write your task"
          style={{
            marginTop: '30px',
            marginRight: '15px',
            width: '300px',
            height: '20px',
            background: '#00e1d9',
          }}
          type="text"
          value={newTask}
          onChange={(valor) => setNewTaks([valor.target.value])}
          onKeyDown={(e) => {
            if (e.keyCode === 13) addNewTask();
          }}
        />
        <button
          className="btn"
          style={{
            marginTop: '30px',
            width: '75px',
            height: '25px',
            background: '#a9dce3',
            color: 'black',
          }}
          onClick={() => addNewTask()}
        >
          Add
        </button>
      </div>
      <h1
        style={{
          fontSize: '50px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          boxShadow: '0px 1px 4px 0px',
        }}
      >
        Tasks
      </h1>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            background: '#008970',
            width: '50%',
            heigh: 'auto',
            boxSizing: 'border-box',
            borderRadius: '2%',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '50px',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              boxShadow: '0px 1px 4px 0px',
              margin: 'auto',
            }}
          >
            To do Tasks
          </h1>
          <ul
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              listStyle: 'none',
            }}
          >
            {list.map((item, index) => (
              <li key={index}>
                {index + 1} - {item}
                <input
                  key={item}
                  type="checkbox"
                  value={done}
                  onClick={() => {
                    listDone(item, index);
                    btnDelete(index);
                  }}
                />
                Done
                <button
                  style={{
                    marginLeft: '10px',
                  }}
                  onClick={() => btnDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '20px' }}>Number of tasks {list.length}</p>
        </div>
        <div
          style={{
            background: '#a2eacb',
            width: '50%',
            heigh: 'auto',
            boxSizing: 'border-box',
            borderRadius: '2%',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '50px',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              boxShadow: '0px 1px 4px 0px',
              margin: 'auto',
            }}
          >
            Task dones
          </h1>
          <ul
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {done.map((item, index) => (
              <li key={index}>{item} </li>
            ))}
          </ul>
          <p style={{ fontSize: '20px' }}>Task Dones Total: {done.length}</p>
        </div>
      </div>
    </section>
  );
};
