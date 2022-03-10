package com.b5f1.docong.core.domain.user;

import com.b5f1.docong.api.dto.request.UserInfoReqDto;
import com.b5f1.docong.core.domain.group.TeamUser;
import com.b5f1.docong.core.domain.todo.UserTodo;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "USER")
public class User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long seq;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String name;

    @Column
    private String birth;

    @Column
    private String gender;

    @Column
    private String address;

    @Column
    private String job;

    @Column
    private String position;

    @Column
    private boolean activate;

    @Column
    private String oauth_type;

    @Column
    private String access_token;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserTodo> userTodos = new ArrayList<>();

//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<TeamUser> teamUsers = new ArrayList<>();

    @Builder
    public User(String email, String password, String name, String birth,
        String gender, String address, String job, String position, boolean activate, String oauth_type)        
    {
        this.email = email;
        this.password = password;
        this.name = name;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.job = job;
        this.position = position;
        this.activate = activate;
        this.oauth_type = oauth_type;
    }

    public void addUserTodo(UserTodo userTodo) {
        userTodos.add(userTodo);
        userTodo.changeUser(this);
    }
    // 여기서부터 추가

    public void updateUserInfo(UserInfoReqDto userInfoReqDto) {
        this.password = userInfoReqDto.getPassword();
        this.name = userInfoReqDto.getName();
        this.birth = userInfoReqDto.getBirth();
        this.gender = userInfoReqDto.getGender();
        this.address = userInfoReqDto.getAddress();
        this.job = userInfoReqDto.getJob();
        this.position = userInfoReqDto.getPosition();
    }

    public void deleteUser() {
        this.activate = false;
        this.email = "deleteUser";
    }
}
