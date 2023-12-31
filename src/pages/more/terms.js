import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import ContentLayout from "../../component/atoms/layout/contentLayout";
import DetailGoBack from "../../component/molecules/detailGoBack";

function Terms() {
  return (
    <>
      <MainLayout>
        <DetailGoBack title={"이용약관"} style={{ marginBottom: "20px" }} />
        <ContentLayout style={{ marginTop: "20px", gap: "20px" }}>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <MainText style={{ fontSize: "15px", fontWeight: "400", lineHeight: "23px", color: "#191919" }}>
              <span style={{ fontWeight: "600" }}>제 1 조 (목적)</span>
              <br />
              본 약관은 라스트액시트(이하 회사)가 제공하는 라스트액시트 서비스의 이용과 관련하여 회사와 회원간의 권리,
              의무 및 책임사항 기타 필요한 사항을 규정함을 목적으로 한다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 2 조 (용어의 정의)</span>
              <br />
              이 약관에서 사용하는 용어의 정의는 아래와 같다.
              <br />
              1. 서비스라 함은 PC, TV, 휴대용 단말기 등 각종 유무선 기기 또는 프로그램을 통하여 이용할 수 있도록 회사가
              제공하는 모든 인터넷 서비스를 말한다.
              <br />
              2. 회원이란 이 약관에 동의하고 회사가 운영하는 사이트에서 서비스를 제공받는 자를 말한다.
              <br />
              3. 아이디라 함은 회원의 식별과 회원의 서비스 이용을 위하여 회원이 가입 시 사용한 소셜미디어 이메일 주소,
              회사가 승인한 고유아이디 등 개인식별부호를 말한다.
              <br />
              4. 비밀번호라 함은 회사의 서비스를 이용하려는 사람이 아이디를 부여 받은 자와 동일인임을 확인하고 회원의
              권익을 보호하기 위하여 회원이 선정한 문자열을 말한다.
              <br />
              5. 비회원이라 함은 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말한다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 3 조 (약관의 명시와 개정)</span>
              1. 회사는 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처 등을 회원이 알 수
              있도록 초기 화면에 게시하거나 기타의 방법으로 회원에게 공지해야 한다.
              <br />
              2. 회사는 약관의 규제관한법률, 전기통신기본법, 전기통신사업법, 정보통신망법, 통신비밀보호법 등 관련법을
              위배하지 않는 범위에서 이 약관을 개정할 수 있다.
              <br />
              3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 제1항의 방식에 따라 그
              개정약관의 적용일자 7일 전부터 적용일자 전일까지 공지한다. 다만, 회원에게 불리한 약관의 개정의 경우에는 그
              개정약관의 적용일자 30일전부터 적용일자 전일까지 공지한다.
              <br />
              4. 회사가 전항에 따라 개정약관을 공지 또는 통지하면서 회원에게 개정약관 시행일로부터 7일 또는 30일의 기간
              내에 거부 의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을 명확하게 공지 또는 통지하였음에도
              회원이 회사에 대해 명시적으로 거부의 의사표시를 하지 아니한 경우 회원이 개정약관에 동의한 것으로 본다.
              <br />
              5. 회원이 개정약관의 적용에 동의하지 않는 경우 회사는 개정 약관의 내용을 적용할 수 없으며, 이 경우 회원은
              이용계약을 해지할 수 있다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 회사는 이용계약을
              해지할 수 있다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 4 조 (약관의 해석)</span>
              <br />
              1. 이 약관에서 규정하지 않은 사항에 관해서는 약관의 규제에 관한법률, 전기통신기본법, 정보통신망법 등의
              관계법령 또는 상관례에 따른다.
              <br />
              2. 회원이 회사와 개별 계약을 체결하여 서비스를 이용하는 경우에는 개별 서비스 계약이 우선한다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 5 조 (이용계약의 성립)</span>
              <br />
              1. 회사의 서비스 이용계약(이하 이용계약)은 회원이 되고자 하는 자(이하 가입신청자)가 본 약관과
              개인정보처리방침을 읽고 그 내용에 대하여 동의를 한 다음 회원가입 신청을 하고 회사가 이러한 신청에
              승낙함으로써 성립된다.
              <br />
              2. 제1항 신청에 있어 회사는 회원의 종류 또는 회원이 이용하는 서비스에 따라 전문기관을 통한 실명확인 및
              본인인증을 요청할 수 있다. 회원은 본인 인증에 필요한 이름, 연락처, 메일주소 등을 제공하여야 한다.
              <br />
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 6 조 (이용신청의 승낙과 제한)</span>
              <br />
              1. 회사는 전조의 규정에 의한 가입신청자의 가입신청에 대하여 업무수행상 또는 기술상 지장이 없는 경우에는
              원칙적으로 접수 순서에 따라 서비스 이용을 승낙한다.
              <br />
              2. 회사는 아래 사항에 해당하는 경우에 대해서는 이용 신청을 승낙하지 아니한다. 가. 실명이 아니거나 타인의
              명의를 이용하여 신청한 경우 나. 회원가입 신청서 내용을 허위로 기재한 경우
              <br />
              3. 회사는 아래 사항에 해당하는 경우에는 그 신청에 대하여 승낙 제한 사유가 해소될 때까지 승낙을 유보할 수
              있다. 가. 회사가 설비의 여유가 없는 경우 나. 회사의 기술상 지장이 있는 경우 다. 기타 회사의 귀책 사유로
              이용 승낙이 곤란한 경우
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 7 조 (서비스의 내용)</span>
              <br />
              1. 회사가 회원에게 제공하는 서비스의 내용은 다음 각 호와 같다.
              <br />
              가. 편지유언 및 기록과 관련된 제반 서비스
              <br />
              나. 기타 회사가 추가 개발하거나 제휴 계약 등을 통해 회원에게 제공하는 일체의 서비스
              <br />
              2. 회사는 필요한 경우 서비스의 내용을 추가 또는 변경할 수 있다. 단, 이 경우 회사는 추가 또는 변경내용을
              회원에게 공지해야 한다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 8 조 (서비스 이용시간)</span>
              <br />
              1. 회사는 특별한 사유가 없는 한 연중무휴, 1일 24시간 서비스를 제공한다. 다만, 회사는 서비스의 종류나
              성질에 따라 제공하는 서비스 중 일부에 대해서는 별도로 이용시간을 정할 수 있으며, 이 경우 회사는 그
              이용시간을 사전에 회원에게 공지 또는 통지하여야 한다.
              <br />
              2. 회사는 자료의 가공과 갱신을 위한 시스템 작업시간, 장애해결을 위한 보수작업 시간, 회선 장애 등이 발생한
              경우 일시적으로 서비스를 중단할 수 있으며 계획된 작업의 경우 공지란에 서비스 중단 시간과 작업 내용을
              알려야 한다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 9 조 (서비스 제공의 중지)</span>
              <br />
              회사는 다음 각 호에 해당하는 경우 서비스의 제공을 중지할 수 있다.
              <br />
              1. 설비의 보수 등 회사의 필요에 의해 사전에 회원들에게 통지한 경우
              <br />
              2. 기간통신사업자가 전기통신서비스 제공을 중지하는 경우 기타 불가항력적인 사유에 의해 서비스 제공이
              객관적으로 불가능한 경우
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 10 조 (회원에 대한 통지와 공지)</span>
              <br />
              1. 회사가 회원에 대한 통지를 하는 경우 이 약관에 별도 규정이 없는 한 회원의 등록된 전자우편 주소로
              이메일을 통하여 할 수 있다.
              <br />
              2. 회사는 회원 전체에 대한 통지의 경우 7일 이상 회사의 공지란에 공지하거나 서비스 첫 화면, App Push
              Message에 게시함으로써 제1항의 통지에 갈음할 수 있다.
              <br />
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 11 조 (정보의 제공 및 광고의 게재)</span>
              <br />
              1. 회사는 회원에게 서비스 이용에 필요가 있다고 인정되거나 서비스 개선 및 회원대상 서비스 소개 등의
              목적으로 하는 각종 정보를 공지사항이나 서비스 화면, 이메일, SNS알림, 푸시 알림 등을 이용한 방법으로 제공할
              수 있다.
              <br />
              2. 회사는 제공하는 서비스와 관련되는 정보 또는 광고를 서비스 화면, 홈페이지 등에 게재할 수 있으며,
              회원들에게 전자우편을 통해 알릴 수 있다. 다만, 회원은 관련법에 따른 거래관련 정보 및 고객문의 등에 답변
              등을 제외하고는 언제든지 전자우편에 대해서 수신 거절을 할 수 있다.
              <br />
              3. 회사는 서비스상에 게재되어 있거나 본 서비스를 통한 광고주의 판촉활동에 회원이 참여하거나 교신 또는
              거래를 함으로써 발생하는 모든 손실과 손해에 대해 책임을 지지 않는다.
              <br />
              4. 회원은 서비스 이용 시 노출되는 광고게재에 대해 동의하는 것으로 간주한다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 12 조 (권리의 귀속)</span>
              <br />
              1. 서비스에 대한 저작권 및 지적재산권은 회사에 귀속된다. 단, 회원의 게시물(저작물이 포함된 경우) 및
              제휴계약에 따라 제공된 저작물 등은 제외된다.
              <br />
              2. 회사는 서비스와 관련하여 회원에게 회사가 정한 이용조건에 따라 계정, 아이디, 콘텐츠 등을 이용할 수 있는
              이용권만을 부여하며, 회원은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 13 조 (회사의 의무)</span>
              <br />
              1. 회사는 본 약관에서 정한 바에 따라 계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을 다해야
              한다.
              <br />
              2. 회사는 서비스와 관련한 회원의 불만사항이 접수되는 경우 이를 즉시 처리하여야 하며, 즉시 처리가 곤란한
              경우에는 그 사유와 처리일정을 서비스 또는 기타 방법을 통해 동 회원에게 통지하여야 한다.
              <br />
              3. 회사는 유료 결제와 관련한 결제 사항 정보를 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 5년간
              보존한다. 다만 회원 자격이 없는 회원은 예외로 한다.
              <br />
              4. 천재지변 등 예측하지 못한 일이 발생하거나 시스템의 장애가 발생하여 서비스가 중단될 경우 이에 대한
              손해에 대해서는 회사가 책임을 지지 않는다. 다만 자료의 복구나 정상적인 서비스 지원이 되도록 최선을 다할
              의무를 진다.
              <br />
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 14 조 (회원의 의무)</span>
              <br />
              1. 회원은 관계법령과 본 약관의 규정 및 기타 회사가 통지하는 사항을 준수하여야 하며, 기타 회사의 업무에
              방해되는 행위를 해서는 안 된다.
              <br />
              2. 회원은 서비스를 이용하여 얻은 정보를 회사의 사전동의 없이 복사, 복제, 번역, 출판, 방송 기타의 방법으로
              사용하거나 이를 타인에게 제공할 수 없다.
              <br />
              3. 회원이 신청한 유료서비스는 등록 또는 신청과 동시에 회사와 채권, 채무 관계가 발생하며, 회원은 이에 대한
              요금을 지정한 기일 내에 납부하여야 한다.
              <br />
              4. 회원이 결제 수단으로 신용카드를 사용할 경우 비밀번호 등 정보 유실 방지는 회원 스스로 관리해야 한다. 단,
              사이트의 결함에 따른 정보유실의 발생에 대한 책임은 회원의 의무에 해당하지 아니한다.
              <br />
              5. 회원은 본 서비스 이외의 목적으로 사용해서는 안되며 이용 중 다음 각 호의 행위를 해서는 안 된다.
              <br />
              가. 다른 회원의 아이디를 부정 사용하는 행위
              <br />
              나. 범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위
              <br />
              다. 타인의 명예를 훼손하거나 모욕하는 행위
              <br />
              라. 타인의 지적재산권 등의 권리를 침해하는 행위
              <br />
              마. 해킹행위 또는 바이러스의 유포 행위
              <br />
              바. 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 계속적으로 전송하는 행위
              <br />
              사. 서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있다고 판단되는 행위
              <br />
              아. 사이트의 정보 및 서비스를 이용한 영리 행위
              <br />
              자. 그 밖에 선량한 풍속, 기타 사회질서를 해하거나 관계법령을 위반하는 행위
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제15조 (이용요금 환불정책)</span>
              <br />
              1. 회원이 본 약관을 위반하여 회사가 회원의 서비스 이용을 제한하거나 계약을 해지하는 경우 회사는 회원에게
              이용요금을 환불하지 않습니다.
              <br />
              2. 회사가 제공하는 유료서비스가 결제 후 1회의 이용만으로 서비스의 이용이나 구매가 완료되는 서비스인 경우
              해당 서비스를 이용한 후에는 환불이 불가능합니다. 단, 1회의 구매 완료 후 그 사용기한이 무제한인 서비스는
              구매 완료일로부터 1년 이내에만 환불이 가능하며 환불금액은 구입금액*(365-사용일수/365)로 합니다.
              <br />
              3. 회사가 제공하는 유료서비스가 결제 후 1개월(결제 기준) 이하로 지속되는 서비스이거나 일(1)개월 단위로
              매월 결제되는 서비스의 경우에는 이용 시작 7일이 경과하면 청약을 철회할 수 없으며 결제된 이용기간
              만료일까지 이용하여야 합니다.
              <br />
              4. 회사가 제공하는 유료서비스가 결제 후 1개월(결제 기준)을 초과하여 지속되는 서비스인 경우 해지일로부터
              이용일수에 해당하는 금액과 총 남은 이용일수의 10%를 제외한 금액을 환불합니다. 단, 유료 서비스 이용
              개시일로부터 7일 이내에 해지를 요구하는 경우 이용일수에 해당하는 금액만을 제외하고 환불합니다.
              <br />
              5. 상기의 규정에도 불구하고 아래 각 호의 경우에는 회원 개인이 결제한 전액을 환불합니다.
              <br />
              a. 결제를 완료한 후 서비스를 이용한 내역이 없는 경우
              <br />
              b. 서비스 장애 또는 회사가 제시한 최소한의 기술사양을 충족하였음에도 불구하고 회사의 귀책사유로 서비스를
              이용하지 못한 경우
              <br />
              c. 회원이 구매한 서비스가 제공되지 않은 경우
              <br />
              d. 제공되는 서비스가 표시・광고 등과 상이하거나 현저한 차이가 있는 경우
              <br />
              e. 제공되는 서비스의 결함으로 서비스의 정상적인 이용이 현저히 불가능한 경우
              <br />
              6. 회원은 이용요금에 대하여 이의를 제기할 수 있습니다. 단, 이용요금에 관한 이의는 그 사유 발생을 안
              날로부터 1월, 그 사유가 발생한 날로부터 3월 이내에 제기하여야 합니다.
              <br />
              7. 회사는 과오납 금액이 발생한 경우 또는 전액 환불의 경우 이용대금의 결제와 동일한 방법으로 환불하여야
              합니다. 다만, 동일한 방법으로 환불이 불가능하거나 서비스의 중도해지로 인한 부분 환불 등의 경우에는 회사가
              정하는 별도의 방법으로 환불합니다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 16조 (회원탈퇴 및 회원자격 상실)</span>
              <br />
              1. 회원은 언제든지 회원탈퇴를 하기 위해 고객센터 또는 회원탈퇴 메뉴 등을 통하여 이용계약 해지 신청을 할 수
              있으며, 회사는 관련법 등이 정하는 바에 따라 이를 처리한다.
              <br />
              2. 다음의 사항에 해당하는 경우 회사는 사전 동의없이 가입해지나 서비스 중지 및 관련된 컨텐츠 삭제 조치를
              취할 수 있다.
              <br />
              가. 회원의 의무를 성실하게 이행하지 않았을 때<br />
              나. 규정한 유료서비스 이용 요금을 납부하지 않았을 때<br />
              다. 본 서비스 목적에 맞지 않는 분야에 정보를 활용하여 사회적 물의가 발생한 때<br />
              라. 회원이 등록한 정보의 내용이 사실과 다르거나 조작되었을 때<br />
              마. 본 서비스와 관련하여 회사 또는 제3자의 명예를 훼손하였을 때<br />
              바. 기타 위 각호에 준하는 사유가 발생하였을 때<br />
              3. 회사는 회원이 약관 및 서비스 이용약관을 위반한 경우 그 경중에 따라 경고, 일시적 이용정지, 영구적
              이용정지 등 조치를 취할 수 있으며, 서비스 이용을 제한하거나 이용계약을 해지할 수 있다.
              <br />
              4. 회원은 제 3항에 따른 서비스 이용정지 기타 서비스 이용과 관련된 이용제한에 대하여 회사가 정한 절차에
              따라 이의신청을 할 수 있으며, 회사는 회원의 이의신청이 정당하다고 판단되는 경우 즉시 서비스 이용을
              재개한다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 17 조 (손해배상)</span>
              <br />
              1. 본 서비스 이용과 관련하여 게시된 정보의 오류 및 누락 등에 관한 손해에 관하여 회사의 고의 과실이 있는
              경우 이외에는 책임을 지지 않는다.
              <br />
              2. 회원이 이 약관의 규정에 위반한 행위로 회사 및 제3자에게 손해를 입히거나 회원의 책임 있는 사유에 의해
              회사 및 제3자에게 손해를 입힌 경우에는 회사는 그에 대해 책임을 지지 않으며, 회원은 그 손해를 전부
              배상하여야 한다.
              <br />
              3. 타 회원의 귀책사유로 회원의 손해가 발생한 경우 회사는 이에 대한 배상 책임이 없다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 18 조 (회원의 개인정보보호)</span>
              <br />
              회사는 회원의 개인정보보호를 위하여 노력해야 한다. 회원의 개인정보보호에 관해서는 개인정보보호법 등
              관계법령에 따르고, 본 서비스 사이트에 개인정보처리방침을 고지한다.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>제 19 조 (분쟁의 해결)</span>
              <br />
              1. 회사와 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 한다.
              <br />
              2. 전항의 노력에도 불구하고, 동 분쟁에 관한 소송은 민사소송법상 관할법원에 제소한다.
              <br />이 약관은 시행일로부터 적용되며, 관련법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는
              경우에는 지체없이 홈페이지를 통하여 고지한다.
            </MainText>
          </div>
        </ContentLayout>
      </MainLayout>
    </>
  );
}

export default Terms;
