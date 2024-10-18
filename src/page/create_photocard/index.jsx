import { PrimaryBtn } from "../../components/commons/btn/primaryBtn";
import { DropdownInput } from "../../components/commons/dropdown_input/DropdownInput";
import { TextfieldNormal } from "../../components/commons/input_normal/inputTextfield";
import { Title } from "../../components/commons/title/Title";
import styles from "./index.module.css";

import backIcon from "./assets/back_icon.svg";

const CreatePhotoCardPage = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.titleContainer}>
            <img src={backIcon} alt="back" className={styles.backIcon} />
            <div className={styles.titleWrapper}>
              <Title title={"포토카드 생성"} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.photoCardName}>
              <TextfieldNormal
                inputHeight="60px"
                title={"포토카드 이름"}
                placeholder={"포토카드 이름을 입력해 주세요"}
              />
            </div>
            <div className={styles.grade}>
              <DropdownInput
                label={"등급"}
                placeholder={"등급을 선택해 주세요"}
                options={[]}
              />
            </div>
            <div className={styles.genre}>
              <DropdownInput
                label={"장르"}
                placeholder={"장르를 선택해 주세요"}
                options={[]}
              />
            </div>
            <div className={styles.price}>
              <TextfieldNormal
                inputHeight="60px"
                title={"가격"}
                placeholder={"가격을 입력해 주세요"}
              />
            </div>
            <div className={styles.totalVolume}>
              <TextfieldNormal
                inputHeight="60px"
                title={"총 발행량"}
                placeholder={"총 발행량을 입력해 주세요"}
              />
            </div>
            <div className={styles.photoUpload}>
              <div className={styles.textfieldWrapper}>
                <TextfieldNormal
                  inputHeight="60px"
                  title={"사진 업로드"}
                  placeholder={"사진 업로드"}
                />
              </div>
              <div className={styles.uploadButtonWrapper}>
                <button className={styles.uploadButton}>파일 선택</button>
              </div>
            </div>
            <div className={styles.photoCardDesc}>
              <TextfieldNormal // textarea로 변경
                inputHeight="180px"
                title={"포토카드 설명"}
                placeholder={"카드 설명을 입력해주세요"}
              />
            </div>
            <div className={styles.createButtonWrapper}>
              <PrimaryBtn text="생성하기" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreatePhotoCardPage;
