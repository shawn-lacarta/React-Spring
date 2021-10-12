package own.project.demo.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin("http://localhost:3000/")
public class UserWeb {
    private UserService userService;

    public UserWeb(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findUserById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok().body(userService.findById(id));
    }

    @PostMapping
    public ResponseEntity<User> postUser(@RequestBody User user) {
        return ResponseEntity.ok().body(userService.postUser(user));
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers (){
        return ResponseEntity.ok().body(userService.getAllUsers());
    }


    @DeleteMapping("/{id}")
    public void deleteUserById (@PathVariable("id") Integer id) {
        userService.deleteUser(id);
    }

    @PutMapping("{id}")
    public User editUser(@RequestBody User user, @PathVariable Integer id){
        return userService.editUser(id, user);
    }
}
