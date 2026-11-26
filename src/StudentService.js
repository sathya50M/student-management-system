import supabase from "./supabaseClient";

export const getStudents = async () => {
    const { data, error } = await supabase
        .from("student")
        .select("*");

    if (error) throw error;
    return data;
};

export const addStudent = async (payload) => {
    const { data, error } = await supabase
        .from("student")
        .insert(payload)
        .select()
        .single();

    if (error) throw error;
    return data;
};

export const deleteStudent = async (id) => {
    const { error } = await supabase
        .from("student")
        .delete()
        .eq("id", id);

    if (error) throw error;
};

export const getStudentsById = async (id) => {
    const { data, error } = await supabase
        .from("student")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;
    return data;
};

export const updateStudent = async (id, payload) => {
    const { data, error } = await supabase
        .from("student")
        .update(payload)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;
    return data;
};
