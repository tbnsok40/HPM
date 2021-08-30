import { MBTI_ARRAY } from "./constants";

export const countElements = (obj:{}) => {
  const temp = [...Object.keys(obj)];

  const result = temp.filter(key => {
    return obj[key] > 1;
  }); // return 시발
  return decideMBTI(result)
}

export const chooseSingleType = (obj: {[idx: string]: string}) => {
  const newObj = {};
  Object.values(obj).forEach(v => {
    newObj[v] = newObj[v] + 1 || 1
  })
  return countElements(newObj)
}

export const decideMBTI = (data: string[]) => {
  let finalResult = ''
  MBTI_ARRAY.forEach(type => {
    if (data.includes(type)) {
      finalResult += type
    }
  })
  return finalResult
}

export enum MBTI {
  OOOO,
  INFJ = 1,
  ISFP,
  INFP,
  INTP,
  ISFJ,
  INTJ,
  ESFP,
  ENFP,
  ESFJ,
  ESTJ,
  ENTJ,
}

export const switchType = (mbtiType) => {
  console.log('333',mbtiType);
  switch (mbtiType) {
    case "INFJ":
      return 1;
    case "ISFP":
      return 2;
    case "INFP":
      return 3;
    case "INTP":
      return 4;
    case "ISFJ":
      return 5;
    case "INTJ":
      return 6;
    case "ESFP":
      return 7;
    case "ENFP":
      return 8;
    case "ESFJ":
      return 9;
    case "ESTJ":
      return 10;
    case "ENTJ":
      return 11;
    default:
      break;
  }
};

// resultRepository => primaryKey (mbtiType) , resultImg, resultMsg,          `

// typescript cleancode 를 읽으면서 위 케이스에 enum 도입해보기. 좋은 아티클과 소스를 읽다보니 코드의 개선 여지가 계속 보인다.
// 좋은 아티클과 코드를 자주 접하면서 제가 짠 코드의 개선 여지를 끊임없이 탐구합니다.

// 의도를 알려주기 위해 enum을 사용하세요
// 예를 들어 그것들의 값 자체보다 값이 구별되어야 할 때와 같이 코드의 의도를 알려주는데에 enum은 도움을 줄 수 있습니다.
