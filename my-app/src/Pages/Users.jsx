import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getUsers } from './store/slices/counter.slice'; // importamos la acción thunk
import { useDispatch } from 'react-redux';

const usersRedux = () => {
  const users = useSelector(state => state.users)
  return(
    <div>{users}</div>
  )
} 
const Users = () => {
  const [users, setUsers] = useState([]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:4001/api/v1/users/create", data)
      .then((res) => console.log(res));
  };

  export const getUsersThunk = () => (dispatch) => {
		dispatch(setIsLoading(true))
		return axios.get('http://localhost:4001/api/v1/users/getusers')
		    .then(res => dispatch(setUsers(res.data)))
				.finally(() => dispatch(setIsLoading(false))
}

  /* useEffect(() => {
    axios
      .get("http://localhost:4001/api/v1/users/getusers")
      .then((res) => setUsers(res.data));
  }, []); */

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:4001/api/v1/users/${id}`)
      .then((res) => console.log(res));
  };

  const updateUser = (id) => {
    axios
      .patch(`http://localhost:4001/api/v1/users/${id}`)
      .then((res) => console.log(res));
  };

  console.log(users.allUsers);

  return (
    <ContAllUsers>
      <FormAddUSer onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">Apellidos</label>
          <input type="text" {...register("lastName")} />
        </div>
        <div>
          <label htmlFor="">DNI</label>
          <input type="number" {...register("dni")} required />
        </div>
        <div>
          <label htmlFor="">Años</label>
          <input type="number" {...register("age")} />
        </div>
        <div>
          <label htmlFor="">Fecha</label>
          <input type="date" {...register("date")} />
        </div>
        <div>
          <label htmlFor="">Nacionalidad</label>
          <input type="text" {...register("nationality")} />
        </div>
        <div>
          <label htmlFor="">correo</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input type="password" {...register("password")} />
        </div>
        <button>Crear</button>
      </FormAddUSer>
      {users.allUsers?.map((user) => {
        return (
          <CardUser>
            <h4>
              {user.name} {user.lastName}
            </h4>
            <button onClick={() => updateUser(user._id)}>Editar</button>
            <button onClick={() => deleteUser(user._id)}>Eliminar</button>
          </CardUser>
        );
      })}
    </ContAllUsers>
  );
};

export default Users;

const ContAllUsers = styled.div``;

const CardUser = styled.div`
  border: 1px solid black;
  height: 80px;
`;

const FormAddUSer = styled.form``;
