export enum MBTI {
  ENFP,
  INFP,
  ESFP,
  ISFP,
  ENTP,
  ENFJ,
  INFJ,
}

export const switchType = (mbtiType) => {
  switch (mbtiType) {
    case MBTI.ENFP:
      return 1;
    case "INFP":
      return 1;
    case "ESFP":
      return 1;
    case "ISFP":
      return 1;
    case "ENTP":
      return 1;
    case "INFP":
      return 1;
    case "ENFJ":
      return 1;
    case "INFJ":
      return 1;
    default:
      break;
  }
};

// resultRepository => primaryKey (mbtiType) , resultImg, resultMsg,          `

// typescript cleancode 를 읽으면서 위 케이스에 enum 도입해보기. 좋은 아티클과 소스를 읽다보니 코드의 개선 여지가 계속 보인다.
// 좋은 아티클과 코드를 자주 접하면서 제가 짠 코드의 개선 여지를 끊임없이 탐구합니다.

// 의도를 알려주기 위해 enum을 사용하세요
// 예를 들어 그것들의 값 자체보다 값이 구별되어야 할 때와 같이 코드의 의도를 알려주는데에 enum은 도움을 줄 수 있습니다.

