import React from "react";
import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AppContext from "../context/Context";
import NavigationContext from "../context/NavigationContext";
import ControlBar from "../components/ControlBar";
import Header from "../components/Header";
import { PostBody, myJobs, JobBody } from "../types/post";
import axios from "axios";
import uuid from "react-native-uuid";

const AddJobPage = () => {
  const context = useContext(AppContext);
  const navigation = useContext(NavigationContext);
  const { myPostFeed, setMyPostFeed, userId } = context;
  const { goBackHome, homeNavigation } = navigation;
  const [compensation, setCompensation] = useState<string>("");

  const [jobForm, setJobForm] = useState<myJobs>({
    title: "",
    jobid: "",
    description: "",
    price: 0,
    location: "",
    status: false,
  });

  const postjob = async (postbody: JobBody) => {
    console.log("This is the post body -> ",postbody)
    if (postbody) {
      JSON.stringify(postbody);
      const result = await axios
        .post(`http://localhost:8000/postjob/${userId}`, postbody)
        .then((response) => {
          console.log(response);
        });
      return result;
    }
  };
  // should do an api call to save the job to the database,
  // and also should add the job to my jobs.
  const addJob = async () => {
    console.log("userid;", userId);
    const price = Number(compensation);
    const jobid = uuid.v4() as string;
    const postJob: JobBody = {
      user_id: userId,
      job_id: jobid,
      title: jobForm.title,
      description: jobForm.description,
      location: jobForm.location,
      coordinates: "test",
      price: jobForm.price,
      created_at: String(Date.now()),
      is_complete: false,
    };
    // Update jobForm state and then update myPostFeed
    setJobForm((prev) => {
      const updatedJobForm = {
        ...prev,
        price: price,
        job_id: jobid,
      };
      postjob(postJob);
      // Use the updated job form here
      setMyPostFeed((prevPosts: any) => [...prevPosts, updatedJobForm]);

      return updatedJobForm;
    });

    homeNavigation();
  };

  return (
    <>
      <Header />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={style.container}>
          <View style={style.input_container}>
            <Text style={style.title}>Favorsの追加</Text>
            <TextInput
              placeholder="Favorsタイトル"
              style={style.input_container}
              value={jobForm.title}
              onChangeText={(title: string) =>
                setJobForm({ ...jobForm, title })
              }
            />
            <TextInput
              placeholder="詳細"
              style={style.input_container}
              value={jobForm.description}
              onChangeText={(description: string) =>
                setJobForm({ ...jobForm, description })
              }
            />
            <TextInput
              placeholder="￥"
              keyboardType="numeric"
              style={style.input_container}
              value={compensation}
              onChangeText={(text) => setCompensation(text)}
            />
            <TextInput
              placeholder="場所"
              style={style.input_container}
              value={jobForm.location}
              onChangeText={(location: string) =>
                setJobForm({ ...jobForm, location })
              }
            />
            <View style={style.formAction}>
              <TouchableOpacity
                onPress={() => {
                  console.log(compensation);
                  addJob();
                }}
              >
                <View style={style.btn}>
                  <Text style={style.btnText}>Add</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={style.btn}>
                  <Text style={style.btnText}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <ControlBar />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    textAlign: "center",
  },
  input_container: {
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    paddingVertical: 15,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 5,
    fontWeight: "bold",
  },

  addjob_title: {
    display: "flex",
    justifyContent: "center",
  },
  formAction: {
    marginTop: 24,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingVertical: 8,
    backgroundColor: "#004831",
    borderColor: "#004831",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
  inputControl: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 6,
    textAlign: "center",
  },
});

export default AddJobPage;
