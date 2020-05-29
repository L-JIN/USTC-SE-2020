import Mock from 'mockjs';

const teachers = {
  'teachers|2-7': [
    {
      name: () => Mock.Random.cname(),
      id: () => Mock.Random.id(),
      email: () => Mock.Random.email(),
      phone: /^1[385][1-9]\d{8}/,
      'academy|+1': ['计算机学院', '信息学院', '数学院', '核物理学院', '量子力学学院', '美术学院', '工学院'],
    },
  ],
};

export default teachers;
