<template>
  <el-form :model="form" label-width="120px">
    <el-row class="row-bg" justify="center">
      <el-text class="mx-1" size="large">裕隆集團汽車事業工作申請書—行冠企業</el-text>
    </el-row>
    <!-- 個人資料 -->
    <el-form-item label="個人資料">
      <el-form-item label="中文姓名">
        <el-input v-model="form.chineseName" />
      </el-form-item>

      <el-form-item label="英文姓名">
        <el-input v-model="form.englishName" />
      </el-form-item>

      <el-form-item label="性別">
        <el-radio-group v-model="form.gender">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="身分證字號">
        <el-input v-model="form.identificationNumber" />
      </el-form-item>

      <el-form-item label="出生日期">
        <el-date-picker v-model="form.dateOfBirth" type="date" placeholder="Pick a date" style="width: 100%" />
      </el-form-item>

      <el-form-item label="年齡">
        <el-input v-model="form.age" />
      </el-form-item>

      <el-form-item label="血型">
        <el-select v-model="form.bloodType" placeholder="please select your blood type">
          <el-option label="A" value="A" />
          <el-option label="B" value="B" />
          <el-option label="O" value="O" />
          <el-option label="AB" value="AB" />
        </el-select>
      </el-form-item>

      <el-form-item label="Email">
        <el-input v-model="form.email" />
      </el-form-item>

      <el-form-item label="身高">
        <el-input v-model="form.height" />
      </el-form-item>

      <el-form-item label="體重">
        <el-input v-model="form.weight" />
      </el-form-item>

      <el-form-item label="出生地">
        <el-input v-model="form.birthplace" />
      </el-form-item>

      <el-col :span="12">
        <el-form-item label="戶籍地址">
          <el-input v-model="form.householdAddress" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="通訊地址">
          <el-input v-model="form.mailingAddress" />
        </el-form-item>
      </el-col>

      <el-form-item label="手機">
        <el-input v-model="form.mobilePhone" />
      </el-form-item>

      <el-form-item label="市內電話">
        <el-input v-model="form.homePhone" />
      </el-form-item>
    </el-form-item>


    <!-- 緊急聯絡人 -->
    <el-form-item label="緊急聯絡人">
      <el-form-item label="姓名">
        <el-input v-model="form.emergencyContact.name" />
      </el-form-item>
      <el-form-item label="電話">
        <el-input v-model="form.emergencyContact.mobilePhone" />
      </el-form-item>
      <el-form-item label="關係">
        <el-input v-model="form.emergencyContact.relationship" />
      </el-form-item>
      <el-col :span="12">
        <el-form-item label="地址">
          <el-input v-model="form.emergencyContact.address" />
        </el-form-item>
      </el-col>
    </el-form-item>


    <!-- 教育程度 -->
    <el-form-item v-for="i in [0, 1, 2]" label="教育程度">
      <el-form-item label="學歷">
        <el-input v-model="form.educationBackgrounds[i].school" />
      </el-form-item>

      <el-form-item label="學位">
        <el-input v-model="form.educationBackgrounds[i].degree" />
      </el-form-item>

      <el-form-item label="科系">
        <el-input v-model="form.educationBackgrounds[i].department" />
      </el-form-item>
    </el-form-item>


    <!-- 論文 -->
    <el-form-item label="論文">
      <el-form-item label="題目">
        <el-input v-model="form.thesis.title" />
      </el-form-item>

      <el-form-item label="發表時間">
        <el-date-picker v-model="form.thesis.publicationTime" type="date" placeholder="Pick a date" style="width: 100%" />
      </el-form-item>

      <el-form-item label="指導教授">
        <el-input v-model="form.thesis.advisor" />
      </el-form-item>
    </el-form-item>

    <!-- 工作經歷 -->
    <el-form-item v-for="i in [0, 1, 2, 3]" label="工作經歷">
      <el-form-item label="服務公司">
        <el-input v-model="form.workExperiences[i].company" />
      </el-form-item>

      <el-form-item label="部門">
        <el-input v-model="form.workExperiences[i].department" />
      </el-form-item>

      <el-form-item label="職稱">
        <el-input v-model="form.workExperiences[i].position" />
      </el-form-item>

      <el-form-item label="直屬主管">
        <el-input v-model="form.workExperiences[i].supervisor" />
      </el-form-item>

      <el-form-item label="主要工作大項">
        <el-input v-model="form.workExperiences[i].jobDescription" />
      </el-form-item>

      <el-form-item label="年薪">
        <el-input v-model="form.workExperiences[i].salary" />
      </el-form-item>

      <el-form-item label="離職原因">
        <el-input v-model="form.workExperiences[i].reasonForLeaving" />
      </el-form-item>

      <el-form-item label="工作期間">
        <el-form-item label="工作開始-年">
          <el-input v-model="form.workExperiences[i].startPeriod.year" />
        </el-form-item>
        <el-form-item label="工作開始-月">
          <el-input v-model="form.workExperiences[i].startPeriod.month" />
        </el-form-item>
        <el-form-item label="工作結束-年">
          <el-input v-model="form.workExperiences[i].endPeriod.year" />
        </el-form-item>
        <el-form-item label="工作結束-月">
          <el-input v-model="form.workExperiences[i].endPeriod.month" />
        </el-form-item>
      </el-form-item>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>

  <!-- 分割線 -->
  <el-divider />

  <el-button @click="fetchApplicantList">刷新列表</el-button>
  <el-table :data="applicantList" style="width: 100%">
    <el-table-column prop="id" label="Id" width="180" />
    <el-table-column prop="chineseName" label="ChineseName" width="180" />
    <el-table-column prop="identificationNumber" label="IdentificationNumber" width="180" />
    <el-table-column prop="email" label="Email" width="180" />
    <el-table-column prop="email" label="Email" width="180" />
    <el-table-column prop="mobilePhone" label="MobilePhone" />
  </el-table>
  <el-divider />

  <!-- 查看申請者資料 -->

  <el-form-item label="申請者編號">
    <el-button @click="fetchApplicant">查看申請者資料</el-button>
    <el-col :span="1">
      <el-input v-model="applicantId" />
    </el-col>
    <el-input v-model="checkApplicant" autosize :rows="2" type="textarea" placeholder="Please input" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import ApplicantApi from '../utils/request';

// 申請者列表
const applicantList = ref([]);
// 查看申請者的編號
const applicantId = ref(1);
// 查看申請者資料
const checkApplicant = ref("");

const form = reactive({
  appliedPosition: "資訊管理部-.NET軟體工程師",
  chineseName: "王大明",
  englishName: "David Wang",
  gender: "男",
  identificationNumber: "A123456789",
  dateOfBirth: "1990-01-01T00:00:00",
  age: 30,
  bloodType: "O",
  email: "example@gmail.com",
  height: 180,
  weight: 70,
  birthplace: "台北市",
  householdAddress: "台北市中山區中山北路二段99號",
  mailingAddress: "台北市中山區中山北路二段99號",
  mobilePhone: "0912345678",
  homePhone: "0223456789",
  militaryService: "已服役",
  driverLicenses: [
    "汽車",
    "機車"
  ],
  emergencyContact: {
    name: "王伯伯",
    mobilePhone: "0912345678",
    relationship: "父子",
    address: "台北市中山區中山北路二段99號"
  },
  educationBackgrounds: [
    {
      degree: "高中",
      school: "建國中學",
      department: "普通科",
      dayNight: "日校",
      startPeriod: {
        year: 2009,
        month: 9
      },
      endPeriod: {
        year: 2012,
        month: 6
      },
      studyStatus: "畢業",
      honors: "曾獲特殊榮譽"
    },
    {
      degree: "學士",
      school: "台灣大學",
      department: "資訊工程學系",
      dayNight: "日校",
      startPeriod: {
        year: 2012,
        month: 9
      },
      endPeriod: {
        year: 2016,
        month: 6
      },
      studyStatus: "畢業",
      honors: "曾獲特殊榮譽"
    },
    {
      degree: "碩士",
      school: "台灣大學",
      department: "資訊工程學系",
      dayNight: "日校",
      startPeriod: {
        year: 2016,
        month: 9
      },
      endPeriod: {
        year: 2018,
        month: 6
      },
      studyStatus: "畢業",
      honors: "曾獲特殊榮譽"
    }
  ],
  thesis: {
    title: "物聯網應用於智慧家庭之研究",
    publicationTime: "2018-06-30T00:00:00",
    advisor: "陳聰明"
  },
  workExperiences: [
    {
      company: "鴻海",
      department: "RD",
      position: "工程師",
      supervisor: "Jim",
      jobDescription: "後端開發",
      startPeriod: {
        year: 2018,
        month: 9
      },
      endPeriod: {
        year: 2019,
        month: 6
      },
      salary: 10000000,
      reasonForLeaving: "想換工作"
    },
    {
      company: "台積電",
      department: "RD",
      position: "工程師",
      supervisor: "John",
      jobDescription: "後端開發",
      startPeriod: {
        year: 2019,
        month: 9
      },
      endPeriod: {
        year: 2020,
        month: 6
      },
      salary: 20000000,
      reasonForLeaving: "想換工作"
    },
    {
      company: "聯發科",
      department: "RD",
      position: "工程師",
      supervisor: "Amy",
      jobDescription: "後端開發",
      startPeriod: {
        year: 2020,
        month: 9
      },
      endPeriod: {
        year: 2021,
        month: 6
      },
      salary: 30000000,
      reasonForLeaving: "想換工作"
    },
    {
      company: "美光",
      department: "RD",
      position: "工程師",
      supervisor: "Bob",
      jobDescription: "後端開發",
      startPeriod: {
        year: 2021,
        month: 9
      },
      endPeriod: {
        year: 2022,
        month: 6
      },
      salary: 30000000,
      reasonForLeaving: "想換工作"
    }
  ]
})

const onSubmit = async () => {
  await ApplicantApi.createApplicant(form)
  console.log('submit!')
}

const fetchApplicantList = async () => {
  applicantList.value = await ApplicantApi.getApplicants()
  console.log('fetch list!')
}

const fetchApplicant = async () => {
  let res = await ApplicantApi.getApplicant(applicantId.value)
  checkApplicant.value = JSON.stringify(res, null, 2)
  console.log('fetch applicant!')
}
</script>
