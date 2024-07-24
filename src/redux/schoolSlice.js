import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3000/api';

const initialState = {
  students: [],
  teachers: [],
  subjects: [],
  classes: [],
  isLoading: false,
  error: ''
};

// Thunks to fetch data from the API
export const fetchStudents = createAsyncThunk('school/fetchStudents', async () => {
  const response = await axios.get(`${baseUrl}/students`);
  return response.data;
});

export const fetchTeachers = createAsyncThunk('school/fetchTeachers', async () => {
  const response = await axios.get(`${baseUrl}/teachers`);
  return response.data;
});

export const fetchSubjects = createAsyncThunk('school/fetchSubjects', async () => {
  const response = await axios.get(`${baseUrl}/subjects`);
  return response.data;
});

export const fetchClasses = createAsyncThunk('school/fetchClasses', async () => {
  const response = await axios.get(`${baseUrl}/class_assignments`);
  return response.data;
});

// Create slice
const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.students = action.payload.Students;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload.teachers;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSubjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subjects = action.payload.subjects;
      })
      .addCase(fetchSubjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchClasses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.classes = action.payload.class_assignments;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = schoolSlice.actions;
export default schoolSlice.reducer;
