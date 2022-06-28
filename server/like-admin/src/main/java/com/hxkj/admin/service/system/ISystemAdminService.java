package com.hxkj.admin.service.system;

import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Assert;
import com.hxkj.admin.validate.common.PageParam;
import com.hxkj.admin.validate.system.SystemAdminParam;
import com.hxkj.admin.validate.system.SystemDeptParam;
import com.hxkj.admin.vo.system.SystemAdminVo;
import com.hxkj.admin.vo.system.SystemDeptVo;
import com.hxkj.admin.vo.system.SystemSelfVo;
import com.hxkj.common.core.PageResult;
import com.hxkj.common.entity.system.SystemAdmin;
import com.hxkj.common.entity.system.SystemDept;
import com.hxkj.common.mapper.system.SystemAdminMapper;
import com.hxkj.common.mapper.system.SystemDeptMapper;
import com.hxkj.common.utils.ArrayUtil;
import com.hxkj.common.utils.TimeUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

/**
 * 系统管理员服务接口类
 */
public interface ISystemAdminService {

    /**
     * 根据账号查找管理员
     *
     * @author fzr
     * @param username 主键ID
     * @return SysAdmin
     */
    SystemAdmin findByUsername(String username);

    /**
     * 管理员列表
     *
     * @author fzr
     * @param pageParam 分页参数
     * @return PageResult<SysAdminListVo>
     */
    PageResult<SystemAdminVo> list(PageParam pageParam, Map<String, String> params);

    /**
     * 当前管理员
     *
     * @author fzr
     * @return SystemSelfVo
     */
    SystemSelfVo self(Integer adminId);

    /**
     * 管理员详情
     *
     * @author fzr
     * @param id 主键参数
     * @return SysAdmin
     */
    SystemAdminVo detail(Integer id);

    /**
     * 管理员新增
     *
     * @author fzr
     * @param systemAdminParam 参数
     */
    void add(SystemAdminParam systemAdminParam);

    /**
     * 管理员编辑
     *
     * @author fzr
     * @param systemAdminParam 参数
     */
    void edit(SystemAdminParam systemAdminParam);

    /**
     * 当前管理员更新
     *
     * @author fzr
     * @param systemAdminParam 参数
     */
    void upInfo(SystemAdminParam systemAdminParam, Integer adminId);

    /**
     * 管理员删除
     *
     * @author fzr
     * @param id 主键参数
     */
    void del(Integer id);

    /**
     * 管理员状态切换
     *
     * @author fzr
     * @param id 主键参数
     */
    void disable(Integer id);

    /**
     * 缓存管理员
     */
    void cacheAdminUserByUid(Integer id);

    @Service
    class SystemDeptServiceImpl implements ISystemDeptService {

        @Resource
        SystemDeptMapper systemDeptMapper;

        @Resource
        SystemAdminMapper systemAdminMapper;

        /**
         * 岗位所有
         *
         * @author fzr
         * @return List<SystemPostVo>
         */
        @Override
        public List<SystemDeptVo> all() {
            List<SystemDept> systemDeptList = systemDeptMapper.selectList(new QueryWrapper<SystemDept>()
                    .gt("pid", 0)
                    .eq("is_delete", 0)
                    .orderByDesc((Arrays.asList("id", "sort"))));

            List<SystemDeptVo> adminVoArrayList = new ArrayList<>();
            for (SystemDept systemDept : systemDeptList) {
                SystemDeptVo vo = new SystemDeptVo();
                BeanUtils.copyProperties(systemDept, vo);

                vo.setUpdateTime(TimeUtil.timestampToDate(systemDept.getUpdateTime()));
                vo.setCreateTime(TimeUtil.timestampToDate(systemDept.getCreateTime()));
                adminVoArrayList.add(vo);
            }

            return adminVoArrayList;
        }

        /**
         *  部门列表
         *
         * @author fzr
         * @param params 搜索参数
         * @return JSONArray
         */
        @Override
        public JSONArray list(Map<String, String> params) {
            QueryWrapper<SystemDept> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("is_delete", 0);
            queryWrapper.orderByAsc(Arrays.asList("sort", "id"));
            queryWrapper.select(SystemDept.class, info ->
                !info.getColumn().equals("is_delete") &&
                !info.getColumn().equals("delete_time"));

            systemDeptMapper.setSearch(queryWrapper, params, new String[]{
                    "like:name:str",
                    "=:isStop@is_stop:int"
            });

            List<SystemDept> systemDeptList = systemDeptMapper.selectList(queryWrapper);

            List<SystemDeptVo> lists = new ArrayList<>();
            for (SystemDept systemDept : systemDeptList) {
                SystemDeptVo vo = new SystemDeptVo();
                BeanUtils.copyProperties(systemDept, vo);

                vo.setCreateTime(TimeUtil.timestampToDate(systemDept.getCreateTime()));
                vo.setUpdateTime(TimeUtil.timestampToDate(systemDept.getUpdateTime()));
                lists.add(vo);
            }

            JSONArray jsonArray = JSONArray.parseArray(JSONArray.toJSONString(lists));
            return ArrayUtil.listToTree(jsonArray, "id", "pid", "children");
        }

        /**
         * 部门详情
         *
         * @author fzr
         * @param id 主键
         * @return SystemDeptVo
         */
        @Override
        public SystemDeptVo detail(Integer id) {
            SystemDept systemDept = systemDeptMapper.selectOne(
                    new QueryWrapper<SystemDept>()
                         .select(SystemDept.class, info ->
                             !info.getColumn().equals("is_delete") &&
                             !info.getColumn().equals("delete_time"))
                        .eq("id", id)
                        .eq("is_delete", 0)
                        .last("limit 1"));

            Assert.notNull(systemDept, "部门已不存在!");

            SystemDeptVo vo  = new SystemDeptVo();
            BeanUtils.copyProperties(systemDept, vo);
            vo.setCreateTime(TimeUtil.timestampToDate(systemDept.getCreateTime()));
            vo.setUpdateTime(TimeUtil.timestampToDate(systemDept.getUpdateTime()));

            return vo;
        }

        /**
         * 部门新增
         *
         * @author fzr
         * @param systemDeptParam 参数
         */
        @Override
        public void add(SystemDeptParam systemDeptParam) {
            if (systemDeptParam.getPid() == 0) {
                SystemDept systemDept = systemDeptMapper.selectOne(
                        new QueryWrapper<SystemDept>()
                                .select("id,pid,name")
                                .eq("pid", 0)
                                .eq("is_delete", 0)
                                .last("limit 1"));

                Assert.isNull(systemDept, "顶级部门只允许有一个");
            }

            SystemDept model = new SystemDept();
            model.setPid(systemDeptParam.getPid());
            model.setName(systemDeptParam.getName());
            model.setDuty(systemDeptParam.getDuty());
            model.setMobile(systemDeptParam.getMobile());
            model.setSort(systemDeptParam.getSort());
            model.setIsStop(systemDeptParam.getIsStop());
            model.setIsDelete(0);
            model.setCreateTime(System.currentTimeMillis() / 1000);
            model.setUpdateTime(System.currentTimeMillis() / 1000);
            systemDeptMapper.insert(model);
        }

        /**
         * 部门编辑
         *
         * @author fzr
         * @param systemDeptParam 参数
         */
        @Override
        public void edit(SystemDeptParam systemDeptParam) {
            SystemDept model = systemDeptMapper.selectOne(
                    new QueryWrapper<SystemDept>()
                            .select(SystemDept.class, info ->
                                !info.getColumn().equals("is_delete") &&
                                !info.getColumn().equals("delete_time"))
                            .eq("id", systemDeptParam.getId())
                            .eq("is_delete", 0)
                            .last("limit 1"));

            Assert.notNull(model, "部门不存在");
            Assert.isFalse((model.getPid() == 0 && systemDeptParam.getPid() > 0), "顶级部门不能修改上级");
            Assert.isFalse(systemDeptParam.getId().equals(systemDeptParam.getPid()), "上级部门不能是自己");

            model.setPid(systemDeptParam.getPid());
            model.setName(systemDeptParam.getName());
            model.setDuty(systemDeptParam.getDuty());
            model.setMobile(systemDeptParam.getMobile());
            model.setSort(systemDeptParam.getSort());
            model.setIsStop(systemDeptParam.getIsStop());
            model.setUpdateTime(System.currentTimeMillis() / 1000);
            systemDeptMapper.updateById(model);
        }

        /**
         * 部门删除
         *
         * @author fzr
         * @param id 主键
         */
        @Override
        public void del(Integer id) {
            SystemDept model = systemDeptMapper.selectOne(
                    new QueryWrapper<SystemDept>()
                            .select("id,pid,name")
                            .eq("id", id)
                            .eq("is_delete", 0)
                            .last("limit 1"));

            Assert.notNull(model, "部门不存在");
            Assert.isFalse((model.getPid() == 0), "顶级部门不能删除");

            SystemAdmin systemAdmin = systemAdminMapper.selectOne(new QueryWrapper<SystemAdmin>()
                    .select("id,nickname")
                    .eq("dept_id", id)
                    .eq("is_delete", 0)
                    .last("limit 1"));

            Assert.isNull(systemAdmin, "该部门已被管理员使用,请先移除");

            model.setIsDelete(1);
            model.setDeleteTime(System.currentTimeMillis() / 1000);
            systemDeptMapper.updateById(model);
        }

    }
}
