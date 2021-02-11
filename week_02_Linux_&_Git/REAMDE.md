## Linux / Git 학습 내용 정리

- **파일 시스템** 

  - 저장 장치 내에서 데이터를 읽고 쓰기 위해 미리 정한 **약속** 또는 **기준**
  - 파일 저장 및 검색을 할 수 있도록 **관리**하는 **방법**
  - 파일을 어떻게 관리할 것인가에 대한 **정책**

- **리눅스 파일 시스템** : 디렉토리 + 파일의 형태로 구성

  - 루트 파일 아래에 계층적으로 모든 파일과 디렉토리가 만들어짐

- **파일** : 주기억장치나 디스크처럼 물리적인 하드웨어 저장 공간에 저장되는 **데이터의 집합**

- **파일 시스템의 종류**

  - FAT : 파일 할당 테이블, 메모리카드에 쓰임, 단순한 자료구조, 공간 활용이 떨어짐
  - NTFS : 윈도우즈 NT 계열 (FAT 시스템을 대체하기 위해 나온 New Technology), 시스템 고장과 디스크 손상을 복구할 수 있어서 안정성이 FAT에 비해 높다, 보안성도 개선됨
  - EXT : ext2, ext3, ext4 등 리눅스에서 사용됨

- **디렉토리 구조**

  - 리눅스 파일 시스템의 디렉토리 구조는 **트리(tree)** 구조

    ```sh
    root
     ├─bin
     ├─home ─ elice ─ 바탕화면 
     ├─lib          ├─문서      
     └─user         └─다운로드  
    ```

    - **bin** : 기본적인 명령어가 저장되는 공간(ls, cd 등..)
    - **home** : 리눅스에 계정을 추가하면 각 계정에 맞게 생성되는 공간
    - **lib** : 리눅스나 각종 프로그램에서 쓰이는 라이브러리가 저장되는 공간
    - **boot** : 리눅스가 시작될 때 건드려야 할 세팅이나 설정 등을 보관하는 공간
    - **etc** : 리눅스의 거의 모든 설정파일이 존재하는 공간

## Git Branch / Git Merge

#### Git 가지 치기

- `git branch` : 현재 가지고 있는 branch 확인
- `git branch [생성할 branch 이름]` : 입력한 이름의 branch **생성**
- `git checkout [이동할 branch 이름]`   : **입력한 branch로** branch **이동(전환)**
- `git checkout <snapshot hash>` : `git log`로 확인한 **snapshot**(16진수 값)으로 이동
- `git branch -d [삭제할 branch 이름]` :  입력한 이름의 branch **삭제**

#### Git Merge

- `master` 브랜치에 다른 브랜치(`new_branch`)의 새로운 기능을 담고 싶다면, 
  - `git checkout master` : 먼저 `master` 브랜치로 이동한 후,
  - `git merge new_branch` : `master`의 위치에서 `new_branch`를 병합한다

- merge시 `git log --graph --all` 명령어를 사용해 commit graph를 미리 확인할 수 있다
  - Fast-forward 등의 경우를 미리 확인 가능 
- `git branch --merged` : 병합된 브랜치를 볼 수 있다
- `git diff` : 충돌된 코드 내용을 볼 수 있다

#### Merge conflict

- 같은 파일의 코드 내용을 수정 후 `git merge` 명령을 수행했을 때 발생 

- `git status` 명령어로 어느 파일에서 충돌이 발생했는지 확인한다 -> `both modified:`  옆의 파일명 확인

-  충돌이 일어난 파일을 열어 코드를 직접 수정한다

  - 특별히 `<<<<<<<< HEAD`, `==========`, `>>>>>>>> [충돌한 branch 이름]` 사이의 코드 내용을 수정한다

- 수정 완료 후, `<<<<<<<< HEAD`, `==========`, `>>>>>>>> [충돌한 branch 이름]` 각각의 행을 삭제한다

- 이후 `git add`, `git commit` 과정을 거치면 병합된다

- 충돌을 해결하는 것도 중요하지만 **충돌을 방지**하는 것도 중요하다!!

  - `master` 브랜치의 변화를 지속적으로 가져와서(`git pull` 등) 충돌이 발생하는 부분을 제거한다.

  - 물론,  `master` 브랜치가 자주 변경되는 일이 없도록 하는 게 좋다 

    (`master`는 배포가 가능한 수준의 안정적인 버전이기 때문이다)

    

## Git 원격 저장소

- **원격 저장소** : 인터넷이나 네트워크 어딘가에 있는 저장소 (GitHub, GitLab 등의 호스팅 서비스)
- `git clone [원격 저장소 주소]` : 기존의 **git repository를 로컬로 복사**
  - 원격 저장소 주소 (예) https://gitlab.com/group/project
    - https://{웹 호스트 서비스}/{그룹 명}/{프로젝트 명}
  - `git clone`으로 복사해온 저장소의 단축 이름은 origin으로 통일된다
- `git remote add origin [원격 저장소 주소]` : **로컬 저장소와 원격 저장소를 연결**
  - 이때 원격 저장소의 단축 이름을 `origin`으로 지정 (다른 이름도 사용 가능)
- `git remote` : 연결된 **원격 저장소 확인**
- `git remote -v` : 지정한 **저장소의 이름과 주소**를 함께 볼 수 있다
- `git remote show origin` : 연결된 원격 저장소 origin에 관한 정보를 한 눈에 볼 수 있음(여기선 )
- `git remote rename origin git_test` : 원격 저장소 **단축 이름**을 `origin`에서 `git_test`로 **변경**
- `git remote rm git_test` : 주소가 변경되었거나, 필요 없어진 **원격 저장소를** **삭제**
- `git fetch` : 원격 저장소에서 **데이터 가져오기** (별도로 `git merge` 작업이 필요)
  - (예) `git fetch origin master` : 원격 저장소 `origin`의 작업내용을 로컬 저장소 `master`로 불러옴
- `git pull` : 원격 저장소에서 **데이터 가져오기(Fetch) + 병합(Merge)** = 저장소 갱신
- `git push origin master` : 로컬 저장소에서 작업한 내용을 원격 저장소에 반영

## 저장소 동기화 / Git Pull / Git Push 

#### 저장소 동기화 파헤치기

- 로컬 저장소와 원격 저장소를 서로 동기화시키기 위해서는 아래 2개의 과정을 거쳐야 한다
  - remote 저장소의 이름을 지정해준다
    - (예) `git remote add origin https://github.com/group/project`
  - **트래킹 브랜치**를 설정해서 push 또는 pull을 해준다
    - (예) `git pull origin master`
    - (예) `git push --set-upstream origin master`   `git push origin master`
    - **트래킹 브랜치** : `git fetch` 또는 `git pull`을 이용해서 원격 저장소를 동기화 하게 되면 `origin/master` 브랜치가 생기게 되는데, 이 브랜치를 트래킹 브랜치라고 한다
    - 몇 가지 **특징**으로는,
      - 트래킹 브랜치는 **원격 저장소의 브랜치가 어디에 위치하는지를 보여준다**
      - 브랜치이지만 checkout 할 수는 없다
      - 가리키고 있는 commit의 위치를 강제로 변경할 수 있다
      - `git merge origin/master`로 merge가 가능하다

#### Git Pull 파헤치기

- pull을 했을 때 트래킹 브랜치는 생성되었지만, 로컬 저장소에서 트래킹 브랜치와 연결된 브랜치가 존재하지 않을 경우
  - `git branch --set-upstream-to={원격 저장소 단축 이름}/{트래킹 branch 이름} {로컬 저장소 branch 이름}`

#### Git Push 파헤치기

- `git clone` 으로 저장소를 복사해온 게 아니라면 처음 push할 때 실제로는 `git push origin master `와 같은 명령을 수행해야 한다
- 아직 로컬 저장소의 branch와 원격 저장소의 branch가 트래킹 되지 않은 경우, 트래킹을 위한 명령어
  - `git branch -set-upstream-to={원격 저장소 단축 이름}/{트래킹 branch 이름} {로컬 저장소 branch 이름}`  또는
  - (예) `git push --set-upstream origin master` : **push와 동시에** 트래킹을 설정하는 방법

## Git Reset / Git Rebase

#### Git Reset

- **HEAD** : 마지막 커밋을 가리키는 snapshot
- **snapshot** : 
  - staging된 데이터들(Index)을 commit 명령으로 영구히 저장한 것을 snapshot이라 한다
  - HEAD 역시 snapshot이고, 현재 위치해 있는 branch를 가리키는 포인터의 역할을 같이 수행한다 
- `git reset --<option> HEAD~` : HEAD를 과거의 snapshot으로 이동시킬 수 있다
  - `git reset --soft HEAD~` : working directory의 파일은 남되, 예전 버전으로 돌아가 **commit을 수정할 수 있다**
  - `git reset --hard HEAD~` : working directory에 존재하는 파일 자체가 사라진다 
- `git log --pretty=oneline` : `git log` 기록 정보를 한 줄로 예쁘게 확인할 수 있다

#### Git Rebase 

- **rebase**는 브랜치가 너무 많아져서 history 정리가 필요한 상황에 사용한다 (그래프를 선형으로 만듦)
- **rebase**는 **현재 branch**와 **rebase 대상 branch**의 공통 부모 commit을 가져온 후, 다음으로 **rebase 대상 branch**의 커밋을 가져오고, 최종적으로 **현재 branch의 커밋을 이어붙인다**
  - (예) `git checkout cat` : **cat** 브랜치로 **현재 branch** 이동
  - (예) `git rebase master` : **rebase 대상 branch**를 **master**로 두고 rebase 수행 (아래 결론 참고)
- **rebase conflict** : merge처럼 rebase 과정 중에서도 충돌이 발생할 수 있다
  - **해결 : merge와 비슷**
    - 먼저, `git status` 로 `both modified` 파일을 확인한다
    - 위에서 확인한 파일에서 코드를 수정하고 `git add` 명령을 수행해서 해당 파일을 staging한다
    - staging 되었다면 `git rebase --continue`를 이용해 rebase를 마무리한다
- **결론**
  - `git rebase master`
    - 위의 명령어를 요약하면, **현재 branch의 commit들을 master branch의 commit 뒤로 이어 붙인다**는 의미 (추가 확인 필요)

## 그 외 참고

- `git config --system --unset credential.helper` : 인증정보를 다시 초기화 해준다

<br/>

\---

※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>

**※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**